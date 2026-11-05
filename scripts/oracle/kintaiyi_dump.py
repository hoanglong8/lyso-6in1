"""Sinh bộ đối chiếu Thái ất từ kintaiyi (MIT) — 72 năm niên kế + 300 ca nguyệt/nhật/thời kế."""
import sys, json, random
# Dùng: pip install --no-deps kintaiyi==0.2.3 ephem numpy cn2an sxtwl
#      python scripts/oracle/kintaiyi_dump.py <thư mục chứa kintaiyi.py> <file ra>
sys.path.insert(0, sys.argv[1])
import kintaiyi as K
random.seed(3)
F = ["kook","ty","skyeyes","sf","se","home_cal","away_cal","set_cal","home_general","home_vgen","away_general","away_vgen","set_general","set_vgen","jigod","hegod","taishui","skyyi","earthyi","zhifu","flyfu","kingbase","officerbase","pplbase","fgd","accnum"]
out = []
cases = []
for y in range(1984, 1984+72): cases.append((0, y, 7, 1, 12))
for i in range(300):
    y = random.randint(1950, 2049); m = random.randint(1, 12); d = random.randint(1, 28); h = random.randint(0, 22)
    cases.append((random.choice([1,2,3]), y, m, d, h))
for ji, y, m, d, h in cases:
    t = K.Taiyi(y, m, d, h, 0)
    r = {"ji": ji, "y": y, "m": m, "d": d, "h": h}
    for f in F:
        try:
            fn = getattr(t, f)
            v = fn(ji, 0) if f not in ("jigod","hegod","taishui") else fn(ji)
            if f == "accnum": v = t.accnum(ji, 0)
            r[f] = v
        except Exception as e:
            r[f] = "ERR " + str(e)[:50]
    out.append(r)
json.dump(out, open(sys.argv[2],'w'), ensure_ascii=False, default=str)
print(len(out)); print(out[0]); print(out[100])
