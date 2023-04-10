const AsyncHandler = require("express-async-handler");
const Program = require("../../model/Academic/Program");

const Admin = require("../../model/Staff/Admin");

//@desc Create Program level
//@route POST /api/v1/programs
//@access private
exports.createProgram = AsyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const programFound = await Program.findOne({ name });

  if (programFound) {
    throw new Error("Program already exists");
  }

  const programCreated = await Program.create({
    name,
    description,
    createdBy: req.userAuth._id,
  });
  //push created progra into admin
  const admin = await Admin.findById(req.userAuth._id);
  admin.programs.push(programCreated._id);
  await admin.save();

  res.status(200).json({
    status: "success",
    message: "Program created successfully",
    data: programCreated,
  });
});

//@desc get all Programs
//@route GET /api/v1/programs
//@access private
exports.getPrograms = AsyncHandler(async (req, res) => {
  const programs = await Program.find();

  res.status(200).json({
    status: "success",
    message: "Programs fetched successfully",
    data: programs,
  });
});

//@desc get single program
//@route GET /api/v1/programs/:id
//@access private
exports.getProgram = AsyncHandler(async (req, res) => {
  const programData = await Program.findById(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Program fetched successfully",
    data: programData,
  });
});

//@desc update program
//@route PUT /api/v1/programs/:id
//@access private
exports.updateProgram = AsyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const programData = await Program.findOne({ name });
  if (programData) {
    throw new Error("Program already exists");
  }
  const program = await Program.findByIdAndUpdate(
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
    message: "Program updated successfully",
    data: program,
  });
});

//@desc delete program
//@route PUT /api/v1/programs/:id
//@access private
exports.deleteProgram = AsyncHandler(async (req, res) => {
  const program = await Program.findByIdAndDelete(req.params.id);

  if (!program) {
    throw new Error("Program does not exists");
  }

  res.status(200).json({
    status: "success",
    message: "Program deleted successfully",
  });
});
