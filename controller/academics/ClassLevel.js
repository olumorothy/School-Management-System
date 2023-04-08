const AsyncHandler = require("express-async-handler");
const AcademicTerm = require("../../model/Academic/AcademicTerm");
const ClassLevel = require("../../model/Academic/ClassLevel");
const Admin = require("../../model/Staff/Admin");

//@desc Create Class level
//@route POST /api/v1/class-levels
//@access private
exports.createClasslevel = AsyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const classFound = await ClassLevel.findOne({ name });

  if (classFound) {
    throw new Error("Class already exists");
  }

  const classCreated = await ClassLevel.create({
    name,
    description,
    createdBy: req.userAuth._id,
  });
  //push academic year into admin
  const admin = await Admin.findById(req.userAuth._id);
  admin.classLevels.push(classCreated._id);
  await admin.save();
  res.status(200).json({
    status: "success",
    message: "Class created successfully",
    data: classCreated,
  });
});

//@desc get all class levels
//@route GET /api/v1/class-levels
//@access private
exports.getClassLevels = AsyncHandler(async (req, res) => {
  const classes = await ClassLevel.find();

  res.status(200).json({
    status: "success",
    message: "Class level fetched successfully",
    data: classes,
  });
});

//@desc get single class level
//@route GET /api/v1/class-levels/:id
//@access private
exports.getClassLevel = AsyncHandler(async (req, res) => {
  const classData = await ClassLevel.findById(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Academic class fetched successfully",
    data: classData,
  });
});

//@desc update class level
//@route PUT /api/v1/class-level/:id
//@access private
exports.updateClassLevel = AsyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const classData = await ClassLevel.findOne({ name });
  if (classData) {
    throw new Error("Class already exists");
  }
  const classLevel = await ClassLevel.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Class level updated successfully",
    data: classLevel,
  });
});

//@desc delete class level
//@route PUT /api/v1/class-levels/:id
//@access private
exports.deleteClassLevel = AsyncHandler(async (req, res) => {
  const classLevel = await ClassLevel.findByIdAndDelete(req.params.id);

  if (!classLevel) {
    throw new Error("class level does not exists");
  }

  res.status(200).json({
    status: "success",
    message: "Class level deleted successfully",
  });
});
