"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { User } from "@supabase/supabase-js";
import { getBrowserSupabase } from "./supabase/client";

interface AuthState {
  enabled: boolean;
  user: User | null;
  plan: "free" | "nang-cao";
  loading: boolean;
}
const Ctx = createContext<AuthState>({ enabled: false, user: null, plan: "free", loading: false });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const sb = getBrowserSupabase();
  const [state, setState] = useState<AuthState>({ enabled: !!sb, user: null, plan: "free", loading: !!sb });
  useEffect(() => {
    if (!sb) return;
    const load = async (user: User | null) => {
      let plan: AuthState["plan"] = "free";
      if (user) {
        const { data } = await sb.from("goi_dich_vu").select("plan, het_han").eq("user_id", user.id).maybeSingle();
        if (data?.plan === "nang-cao" && (!data.het_han || new Date(data.het_han) > new Date())) plan = "nang-cao";
      }
      setState({ enabled: true, user, plan, loading: false });
    };
    sb.auth.getUser().then(({ data }) => load(data.user));
    const { data: sub } = sb.auth.onAuthStateChange((_e, session) => load(session?.user ?? null));
    return () => sub.subscription.unsubscribe();
  }, [sb]);
  return <Ctx.Provider value={state}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);

export async function signOut() {
  await getBrowserSupabase()?.auth.signOut();
}
