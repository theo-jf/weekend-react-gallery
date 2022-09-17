
-- Gallery table
CREATE TABLE "gallery" (
    "id" SERIAL PRIMARY KEY,
    "path" VARCHAR(500) NOT NULL,
    "description" VARCHAR(200) NOT NULL,
    "likes" int DEFAULT 0
);

INSERT INTO "gallery"
    ("path", "description")
    VALUES
    ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.');