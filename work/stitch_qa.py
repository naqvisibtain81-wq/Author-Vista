import json
from pathlib import Path
from PIL import Image

root = Path(__file__).resolve().parent
output = root.parent / "outputs"
output.mkdir(exist_ok=True)

for width in (390, 768, 1024, 1440, 1920):
    source = root / f"qa{width}"
    meta = json.loads((source / "meta.json").read_text())
    positions = meta["positions"]
    scroll_height = meta["scrollHeight"]
    frames = [Image.open(source / f"{index:03}.png").convert("RGB") for index in range(len(positions))]
    canvas_width = frames[0].width
    canvas = Image.new("RGB", (canvas_width, scroll_height), "#101820")
    for index, (frame, top) in enumerate(zip(frames, positions)):
        next_top = positions[index + 1] if index + 1 < len(positions) else scroll_height
        visible_height = min(next_top - top, frame.height, scroll_height - top)
        canvas.paste(frame.crop((0, 0, frame.width, visible_height)), (0, top))
        frame.close()
    target = output / f"author-vista-home-{width}.jpg"
    canvas.save(target, "JPEG", quality=82, optimize=True, progressive=True)
    print(target.name, target.stat().st_size)

previews = []
for width in (390, 768, 1024, 1440, 1920):
    with Image.open(output / f"author-vista-home-{width}.jpg") as image:
        preview = image.copy()
        preview.thumbnail((290, 1500), Image.Resampling.LANCZOS)
        previews.append((width, preview))
gap = 32
sheet_width = sum(image.width for _, image in previews) + gap * (len(previews) + 1)
sheet_height = max(image.height for _, image in previews) + gap * 2
sheet = Image.new("RGB", (sheet_width, sheet_height), "#101820")
left = gap
for _, image in previews:
    sheet.paste(image, (left, gap))
    left += image.width + gap
sheet.save(output / "author-vista-responsive-review.jpg", "JPEG", quality=86, optimize=True, progressive=True)
