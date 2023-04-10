const AsyncHandler = require("express-async-handler");
const Subject = require("../../model/Academic/Subject");
const Program = require("../../model/Academic/Program");

const Admin = require("../../model/Staff/Admin");

//@desc Create Sujects
//@route POST /api/v1/subjects/:programID
//@access private
exports.createSubject = AsyncHandler(async (req, res) => {
  const { name, description, academicTerm } = req.body;

  const programFound = await Program.findById(req.params.programID);

  if (!programFound) {
    throw new Error("Program not found");
  }
  const subjectFound = await Subject.findOne({ name });

  if (subjectFound) {
    throw new Error("Subject already exists");
  }

  const subjectCreated = await Subject.create({
    name,
    description,
    academicTerm,
    createdBy: req.userAuth._id,
  });
  //push to the prorgam
  programFound.subjects.push(subjectCreated._id);
  await programFound.save();

  res.status(200).json({
    status: "success",
    message: "Subject created successfully",
    data: subjectCreated,
  });
});

//@desc get all Subjects
//@route GET /api/v1/subjects
//@access private
exports.getSubjects = AsyncHandler(async (req, res) => {
  const subjects = await Subject.find();

  res.status(200).json({
    status: "success",
    message: "Subjects fetched successfully",
    data: subjects,
  });
});

//@desc get single subject
//@route GET /api/v1/subject/:id
//@access private
exports.getSubject = AsyncHandler(async (req, res) => {
  const subjectData = await Subject.findById(req.params.id);

  res.status(200).json({
    status: "success",
    message: "Subject fetched successfully",
    data: subjectData,
  });
});

//@desc update Subject
//@route PUT /api/v1/subject/:id
//@access private
exports.updateSubject = AsyncHandler(async (req, res) => {
  const { name, description, academicTerm } = req.body;

  const subjectData = await Subject.findOne({ name });
  if (subjectData) {
    throw new Error("Subject already exists");
  }
  const subject = await Subject.findByIdAndUpdate(
    req.params.id,
    {
      name,
      description,
      academicTerm,
      createdBy: req.userAuth._id,
    },
    {
      new: true,
    }
  );

  res.status(200).json({
    status: "success",
    message: "Subject updated successfully",
    data: subject,
  });
});

//@desc delete Subject
//@route PUT /api/v1/subject/:id
//@access private
exports.deleteSubject = AsyncHandler(async (req, res) => {
  const subject = await Subject.findByIdAndDelete(req.params.id);

  if (!subject) {
    throw new Error("Subject does not exists");
  }

  res.status(200).json({
    status: "success",
    message: "Subject deleted successfully",
  });
});
