const categarymodel = require("../model/categary");



//creating a new user
async function createcategary(req, res) {
  

  const { name } = req.body

  try {
    const newcategary =  categarymodel({ name });
    await newcategary.save();

    res.status(201).json({
      status: 1,
      message: "categary  done",
      newcategary,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function deletecategary(req, res) {
  const categaryID = req.body.categaryID;
  console.log(categaryID);

  if (!categaryID){
    res.status(400).json({ message: "not found"});
  }

  try {
    const deletecategary = await categarymodel.findByIdAndDelete(categaryID);

    res.status(201).json({
      status: 1,
      message: "task delete",
      deletecategary,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}

async function updatecategary(req, res) {
  const categaryID = req.params.categaryID;

  const name = req.body.name;

  try {
    var updatecategary = await categarymodel.findByIdAndUpdate(
        categaryID,
      { name: name },
      { new: true, runValidators: true }
    );

    res.status(201).json({
      status: 1,
      message: "task update successfully",
      updatecategary,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
}
async function getcategary(req, res) {
  try {
    const task = await categarymodel.findById(req.params.categaryID);
    if (!task) {
      return res.status(404).json({ message: "categary not found" });
    } else {
      res.status(200).json({ message: "categary found", task });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error while fetching categary", error: err.message });
  }
}

module.exports = {
    createcategary,
    deletecategary,
    updatecategary,
    getcategary
};
