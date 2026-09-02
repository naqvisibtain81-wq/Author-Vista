from pathlib import Path
from PIL import Image

image_dir = Path("public/images")
mapping = {
    3278767: "idea-notebook",
    4559763: "writer-city",
    19342306: "writer-evening",
    7063764: "author-study",
    8730179: "publishing-discussion",
    8962368: "editorial-review",
    4476163: "audiobook-studio",
    11954964: "reader-bookshelf",
    9572569: "experienced-reader",
    11955033: "choose-book",
    16057980: "library-horizon",
    4240508: "writer-home",
    6177572: "blank-page",
    8085259: "design-desk",
    13342040: "typography-proof",
    34889152: "page-turn",
    6143821: "print-detail",
    9297454: "author-book-signing",
}

for pexels_id, name in mapping.items():
    source = image_dir / f"pexels-{pexels_id}.jpg"
    target = image_dir / f"{name}.webp"
    with Image.open(source) as image:
        image.thumbnail((1800, 1800), Image.Resampling.LANCZOS)
        image.save(target, "WEBP", quality=82, method=6)
    print(f"{target.name}: {target.stat().st_size} bytes")
