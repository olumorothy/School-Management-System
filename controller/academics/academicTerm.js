const AsyncHandler = require("express-async-handler");
const AcademicTerm = require("../../model/Academic/AcademicTerm");
const Admin = require("../../model/Staff/Admin");

//@desc Create academic Term
//@route POST /api/v1/academic-term
//@access private
exports.createAcademicTerm = AsyncHandler(async (req, res) => {
  const { name, description, duration } = req.body;

  const academicTerm = await AcademicTerm.findOne({ name });

  if (academicTerm) {
    throw new Error("Academic term already exists");
  }

  const academicTermCreated = await AcademicTerm.create({
    name,
    description,
    duration,
    createdBy: req.userAuth._id,
  });
  //push academic year into admin
  const admin = await Admin.findById(req.userAuth._id);
  admin.academicTerms.push(academicTermCreated._id);
  await admin.save();
  res.status(200).json({
    status: "success",
    message: "Academic term created successfully",
    data: academicTermCreated,
  });
});

//@desc get all academic terms
//@route GET /api/v1/academic-terms
//@access private
exports.getAcademicTerms = AsyncHandler(async (req, res) => {
  const academicTerms = await AcademicTerm.find();

  res.status(200).json({
    status: "success",
    message: "Academic term fetched successfully",
    data: academicTerms,
  });
});

//@desc get single academic term
//@route GET /api/v1/academic-term/:id
//@access private
exports.getAcademicTerm = AsyncHandler(async (req, res) => {
  const academicTerm = await AcademicTerm.findById(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Academic term fetched successfully",
    data: academicTerm,
  });
});

//@desc update academic term
//@route PUT /api/v1/academic-term/:id
//@access private
exports.updateAcademicTerms = AsyncHandler(async (req, res) => {
  const { name, description, duration } = req.body;

  const academicTermFound = await AcademicTerm.findOne({ name });
  if (academicTermFound) {
    throw new Error("Academic term already exists");
  }
  const academicTerm = await AcademicTerm.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      duration,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Academic term updated successfully",
    data: academicTerm,
  });
});

//@desc delete academic term
//@route PUT /api/v1/academic-term/:id
//@access private
exports.deleteAcademicTerm = AsyncHandler(async (req, res) => {
  const academicTermFound = await AcademicTerm.findByIdAndDelete(req.params.id);

  if (!academicTermFound) {
    throw new Error("Acadmic term does not exists");
  }

  res.status(200).json({
    status: "success",
    message: "Academic term deleted successfully",
  });
});
