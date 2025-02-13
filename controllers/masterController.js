const Country = require("../models/country");
const City = require("../models/city");
const Master = require("../models/master");
const { upload } = require("../utils/fileUpload");
// Get list of all countries
exports.countryList = async (req, res) => {
  try {
    const countries = await Country.find({});
    res.status(200).json(countries);
  } catch (error) {
    console.error("Error fetching countries:", error);
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};


// Add list of master  data by master code
exports.masterAdd = async (req, res) => {
  upload.single("DESC2")(req, res, async (err) => {
    try {
      if (err)
        return res.status(500).json({ message: err });
      const { parent_id = null, M_CODE, DESC1,DESC2,DESC3 } = req.body;
      const { id = null } = req.params;
      // Validation
      if (!DESC1) {
        return res.status(400).json({ message: "Please enter fields value." });
      }
      const fileurl = req.file ? `/uploads/${req.file.filename}` : '';
      // If ID is provided, perform an update, otherwise create a new record
      if (id !== null) {
        //Edit functionality - Find the record by ID and update it
        const existingValue = await Master.findById(id);
        if (!existingValue) {
          return res.status(404).json({ message: "Data not found for editing" });
        }

        //Check if value already exists (same DESC1 and master_code for edit)
        const duplicateValue = await Master.findOne({ master_code: M_CODE, DESC1, _id: { $ne: id } });
        if (duplicateValue) {
          return res.status(500).json({ message: "Value already exists" });
        }

        //Update the record
        existingValue.parent_id = parent_id;
        existingValue.master_code = M_CODE;
        existingValue.DESC1 = DESC1;
        existingValue.DESC2 = (req.file)? fileurl: DESC2;
        existingValue.DESC3 = DESC3;

        await existingValue.save();

        return res.status(200).json({ message: "Data Updated Successfully" });
      } else {
        // Create functionality - Check if value already exists for new record
        const existingValue = await Master.findOne({ master_code: M_CODE, DESC1 });
        if (existingValue) {
          return res.status(500).json({ message: "Value already exists" });
        }

        // Create and save the new master value
        const newValue = new Master({ parent_id, master_code: M_CODE, DESC1, DESC2:fileurl,DESC3 });
        await newValue.save();

        return res.status(201).json({ message: "Data Created Successfully" });
      }
    } catch (error) {
      console.error("Error processing master data:", error);
      res.status(500).json({ message: "Something went wrong", error: error.message });
    }
  })

};


// Get list of master  data by master code
exports.masterList = async (req, res) => {
  try {
    const { mid, id } = req.params;

    if (mid) {
      var datalist = await Master.find({ master_code: mid, status: 1 });
    } else {
      var datalist = await Master.find({});
    }

    return res.status(200).json({ message: datalist });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
exports.masterListWithPagination = async (req, res) => {
  try {
    const { mid, id } = req.params;
    const page = parseInt(req.query.page) || 1; // Default to page 1
    const limit = parseInt(req.query.limit) || 3; // Default to 10 items per page
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    if (mid) {
      var datalist = await Master.find({ master_code: mid, status: 1 });
      var datalist = await Master.aggregate([
        {
          $match: {
            master_code: mid,
          },
        },
        {
          $lookup: {
            from: "masters",
            localField: "parent_id",
            foreignField: "_id",
            as: "parentCategory",
          },
        },
        {
          $addFields: {
            parentName: {
              $ifNull: [
                { $arrayElemAt: ["$parentCategory.DESC1", 0] }, // Extract parent DESC1
                null, // Default to null if no parent
              ],
            },
          },
        },
        {
          $project: {
            parentCategory: 0, // Exclude the full parentCategory array
          },
        },
      ]);

    } else {
      var datalist = await Master.find({});
    }
    const results = {
      currentPage: page,
      totalItems: datalist.length,
      totalPages: Math.ceil(datalist.length / limit),
      data: datalist.slice(startIndex, endIndex),
    };

    return res.status(200).json({ message: results });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
};
// Delete Master data
exports.masterDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedMaster = await Master.findByIdAndDelete(id);

    if (!deletedMaster) {
      return res.status(404).json({ message: 'Data not found' });
    }

    // Also delete any data associated with this menu
    await Master.deleteMany({ parent_id: id });

    res.status(200).json({ message: 'Data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting data', error: error.message });
  }
};

exports.masterSingledata = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id)
      return res.status(400).json({ 'message': 'Edit id is missing' });

    const updateData = await Master.findOne({ _id: id });

    return res.status(200).json({ message: updateData });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error: error.message });
  }
}

exports.masterUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, url, parent, order } = req.body;

    if (!name || !url) {
      return res.status(400).json({ message: 'Menu name and URL are required' });
    }

    const updatedMenu = await Menu.findByIdAndUpdate(
      id,
      { name, url, parent, order },
      { new: true } // Return the updated document
    );

    if (!updatedMenu) {
      return res.status(404).json({ message: 'Menu not found' });
    }

    res.status(200).json({ message: 'Menu updated successfully', data: updatedMenu });
  } catch (error) {
    console.error('Error updating menu:', error);
    res.status(500).json({ message: 'Error updating menu', error: error.message });
  }
};

exports.userRole = async (req,res) => {
  return res.status(200).json({ message:req.user.role});
}

