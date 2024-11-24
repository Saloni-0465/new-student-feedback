import { prismaClient } from '../config/db.js';

const prisma = prismaClient;

const getAllissues = async (req, res) => {
  try {
    const allIssues = await prisma.issues.findMany();

    if (!allIssues || allIssues.length === 0) { 
      return res.status(400).json({ message: "No issues found" });
    }
    return res.status(200).json({
      message: "Issues fetched successfully",
      data: allIssues
    });
  } catch (err) {
    console.error(err); 
    return res.status(500).json({ message: "Internal server error" });
  }
};



const postIssues = async(req,res)=>{
    try{

        const { title, description, category, date } = req.body;

        if (!title) return res.status(400).json({ message: "Title field is required" });
        if (!description) return res.status(400).json({ message: "Description field is required" });
        if (!category) return res.status(400).json({ message: "Category field is required" });
        if (!date) return res.status(400).json({ message: "Date field is required" });


        const parsedDate = new Date(date)

        const createIssue = await prisma.issues.create({
            data: {
              title: title,
              description: description,
              category: category,
              date: parsedDate,
            },
          })

        return res.status(200).json({message: "Issue created successfully", createIssue}, 
        )
    }

    catch(err){
        console.log(err);
        return res.status(500).send("Internal server error")
    }
}


const updateStatus = async (req, res) => {
  const { issueId, newStatusId } = req.body;

  if (!issueId || !newStatusId) {
    return res.status(400).json({ error: "Missing issueId or newStatusId" });
  }

  try {
    const updatedIssue = await prisma.issues.update({
      where: { id: issueId }, 
      data: {
        status_id: newStatusId, 
      },
    });

    return res.status(200).json({
      message: "Issue status updated successfully",
      issue: updatedIssue,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "An error occurred while updating the issue status",
    });
  }
};


export {getAllissues,postIssues, updateStatus}




