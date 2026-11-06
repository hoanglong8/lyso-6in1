"""Sinh đáp án đối chiếu Tử vi phái Việt từ lasotuvi (MIT, doanguyen).

Cách dùng: pip install lasotuvi==0.1.2 && python scripts/oracle/lasotuvi_dump.py 3000 > /tmp/lasotuvi.json
Test packages/engine-tuvi/test/vn-oracle.test.ts đọc file qua biến môi trường LASOTUVI_ORACLE.
"""
import json
import random
import sys
import warnings

warnings.filterwarnings("ignore", category=SyntaxWarning)
from lasotuvi.App import lapDiaBan  # noqa: E402
import lasotuvi.DiaBan as _db  # noqa: E402
from lasotuvi.DiaBan import diaBan  # noqa: E402

# lasotuvi dùng chung một đối tượng sao cho mọi lá số và không xóa độ sáng cũ, nên sao có bảng
# miếu hãm thưa (Thiên Mã, Đại Hao…) mang độ sáng của lá số trước. Xóa trước mỗi lần an.
_orig = _db.dacTinhSao


def _dac_tinh_sach(vi_tri, sao):
    sao.saoDacTinh = None
    _orig(vi_tri, sao)


_db.dacTinhSao = _dac_tinh_sach

random.seed(7)
n = int(sys.argv[1]) if len(sys.argv) > 1 else 3000
out = []
for _ in range(n):
    nn, tt, y = random.randint(1, 30), random.randint(1, 12), random.randint(1900, 2100)
    gio, gt = random.randint(1, 12), random.choice([1, -1])
    db = lapDiaBan(diaBan, nn, tt, y, gio, gt, False, 7)
    pal = {}
    for c in db.thapNhiCung[1:]:
        pal[c.cungSo] = {
            "name": c.cungChu,
            "than": c.cungThan,
            "daiHan": c.cungDaiHan,
            "tieuHan": c.cungTieuHan,
            "tuan": getattr(c, "tuanTrung", False),
            "triet": getattr(c, "trietLo", False),
            "stars": sorted(s["saoTen"] + "|" + (s["saoDacTinh"] or "") for s in c.cungSao),
        }
    out.append({"in": [nn, tt, y, gio, gt], "pal": pal})
json.dump(out, sys.stdout, ensure_ascii=False)
