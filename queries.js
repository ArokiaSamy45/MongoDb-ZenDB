
//Find all the topics and tasks which are thought in the month of October
db.tasks.find({
    due_date: {
      $gte: new Date('2022-10-01T00:00:00Z'),
      $lte: new Date('2022-10-31T23:59:59Z')
    }
  })

  db.topics.find({
    taught_date: {
      $gte: new Date('2022-10-01T00:00:00Z'),
      $lte: new Date('2022-10-31T23:59:59Z')
    }
  })
  

  //Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020
  db.company_drives.find({
    drive_date: {
      $gte: ISODate('2022-10-15'),
      $lte: ISODate('2022-10-31')
    }
  })

  //Find all the company drives and students who are appeared for the placement.
  db.company_drives.aggregate([
    {
      $lookup:
        {
          from: "attendance",
          localField: "_id",
          foreignField: "company_drive_id",
          as: "attendance"
        }
    },
    {
      $unwind: "$attendance"
    },
    {
      $lookup:
        {
          from: "users",
          localField: "attendance.user_id",
          foreignField: "_id",
          as: "student"
        }
    },
    {
      $project: {
        "name": 1,
        "description": 1,
        "date": 1,
        "student.name": 1,
        "student.email": 1,
        "student.phone": 1
      }
    }
  ])
  
  
  
  //Find all the mentors with who has the mentee's count more than 15
  db.mentors.find({
    "mentee_count": {
      $gt: 15
    }
  })
  
  
  
  
  