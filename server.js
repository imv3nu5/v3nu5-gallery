const express = require("express");
const cors = require("cors");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

const app = express();

app.use(cors());

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

// app.get("/gallery", async (req, res) => {
//   try {
//     const result = await cloudinary.search
//       .expression("folder:Upload_To_Cloudinary/2024/*")
//       .max_results(500)
//       .execute();

//   const images = result.resources.map((item) => {

//   console.log(item);

//   let category = "unknown";

//   if (item.asset_folder) {
//     const folderParts = item.asset_folder.split("/");
//     category = folderParts[folderParts.length - 1];
//   }

//   return {
//     id: item.asset_id,
//     title: item.display_name || item.filename,
//     subtitle: "View Large",
//     src: item.secure_url,
//     srcLg: item.secure_url,
//     category: category.toLowerCase(),
//     height: Math.random() > 0.5 ? 622 : 299,
//   };
// });

//     console.log(images);
//     res.json(images);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   }
// });

// app.get("/gallery/:year", async (req, res) => {

//   const { year } = req.params;

//   try {

//     const result = await cloudinary.search
//       .expression(`folder:Upload_To_Cloudinary/${year}/*`)
//       .max_results(500)
//       .execute();

//     const images = result.resources.map((item) => {

//       let category = "unknown";

//       if (item.asset_folder) {

//         const folderParts = item.asset_folder.split("/");

//         category = folderParts[folderParts.length - 1];
//       }

//       return {
//         id: item.asset_id,
//         title: item.display_name || item.filename,
//         subtitle: "View Large",
//         src: item.secure_url,
//         srcLg: item.secure_url,
//         category: category.toLowerCase(),
//         height: Math.random() > 0.5 ? 622 : 299,
//       };
//     });

//     res.json(images);

//   } catch (err) {

//     console.log(err);
//     res.status(500).json(err);
//   }
// });

app.get("/gallery/:year", async (req, res) => {

  const { year } = req.params;

  const category = req.query.category;

  const nextCursor = req.query.cursor;

  try {

    let expression = `folder:Upload_To_Cloudinary/${year}/*`;

    if (category && category !== "all") {

      expression =
        `folder:Upload_To_Cloudinary/${year}/${category}`;
    }

    let searchQuery = cloudinary.search
      .expression(expression)
      .max_results(20);

    if (nextCursor) {
      searchQuery = searchQuery.next_cursor(nextCursor);
    }

    const result = await searchQuery.execute();

    const images = result.resources.map((item) => {

      let categoryName = "unknown";

      if (item.asset_folder) {

        const folderParts =
          item.asset_folder.split("/");

        categoryName =
          folderParts[folderParts.length - 1];
      }

      return {
        id: item.asset_id,
        title: item.display_name || item.filename,
        subtitle: "View Large",
        src: item.secure_url,
        srcLg: item.secure_url,
        category: categoryName.toLowerCase(),
        height: Math.random() > 0.5 ? 622 : 299,
      };
    });

    res.json({
      images,
      next_cursor: result.next_cursor || null,
    });

  } catch (err) {

    console.log(err);

    res.status(500).json(err);
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});