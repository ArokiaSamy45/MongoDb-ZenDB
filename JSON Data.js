db.users.insertMany(
    [
		{
			"_id": ObjectId("6148dc3d04e54108f71a48a1"),
			"name": "John Smith",
			"age": 32,
			"email": "john.smith@example.com",
			"address": {
			  "street": "123 Main St",
			  "city": "Anytown",
			  "state": "CA",
			  "zip": "12345"
			}
		  },
		  {
			"_id": ObjectId("6148dc7d04e54108f71a48a2"),
			"name": "Jane Doe",
			"age": 28,
			"email": "jane.doe@example.com",
			"address": {
			  "street": "456 Elm St",
			  "city": "Othertown",
			  "state": "NY",
			  "zip": "67890"
			}
		  },
		  {
			"_id": ObjectId("6148dcbc04e54108f71a48a3"),
			"name": "Bob Johnson",
			"age": 41,
			"email": "bob.johnson@example.com",
			"address": {
			  "street": "789 Oak St",
			  "city": "Somewhere",
			  "state": "TX",
			  "zip": "23456"
			}
		  },
		  {
			"_id": ObjectId("6148dcf104e54108f71a48a4"),
			"name": "Sarah Lee",
			"age": 25,
			"email": "sarah.lee@example.com",
			"address": {
			  "street": "321 Pine St",
			  "city": "Nowhere",
			  "state": "FL",
			  "zip": "78901"
			}
		  }    
	]
)


db.codekata.insertMany(
    [
		{
			"_id": ObjectId("6148dd4c04e54108f71a48a5"),
			"user_id": ObjectId("6148dc3d04e54108f71a48a1"),
			"date": ISODate("2022-01-01T00:00:00Z"),
			"problems_solved": 5,
			"language": "Python"
		  },
		  {
			"_id": ObjectId("6148dd9004e54108f71a48a6"),
			"user_id": ObjectId("6148dc7d04e54108f71a48a2"),
			"date": ISODate("2022-01-02T00:00:00Z"),
			"problems_solved": 7,
			"language": "Java"
		  },
		  {
			"_id": ObjectId("6148ddcf04e54108f71a48a7"),
			"user_id": ObjectId("6148dcbc04e54108f71a48a3"),
			"date": ISODate("2022-01-03T00:00:00Z"),
			"problems_solved": 4,
			"language": "JavaScript"
		  },
		  {
			"_id": ObjectId("6148de0f04e54108f71a48a8"),
			"user_id": ObjectId("6148dcf104e54108f71a48a4"),
			"date": ISODate("2022-01-04T00:00:00Z"),
			"problems_solved": 9,
			"language": "C++"
		  }
	]
)



db.attendance.insertMany(
    [
		{
			"_id": ObjectId("6148e4de04e54108f71a48a9"),
			"user_id": ObjectId("6148dc3d04e54108f71a48a1"),
			"date": ISODate("2022-01-01T00:00:00Z"),
			"status": "present",
			"class_id": ObjectId("6148e4de04e54108f71a48b2")
		  },
		  {
			"_id": ObjectId("6148e51404e54108f71a48aa"),
			"user_id": ObjectId("6148dc7d04e54108f71a48a2"),
			"date": ISODate("2022-01-02T00:00:00Z"),
			"status": "absent",
			"class_id": ObjectId("6148e4de04e54108f71a48b2")
		  },
		  {
			"_id": ObjectId("6148e54304e54108f71a48ab"),
			"user_id": ObjectId("6148dcbc04e54108f71a48a3"),
			"date": ISODate("2022-01-03T00:00:00Z"),
			"status": "present",
			"class_id": ObjectId("6148e4de04e54108f71a48b2")
		  },
		  {
			"_id": ObjectId("6148e57504e54108f71a48ac"),
			"user_id": ObjectId("6148dcf104e54108f71a48a4"),
			"date": ISODate("2022-01-04T00:00:00Z"),
			"status": "late",
			"class_id": ObjectId("6148e4de04e54108f71a48b2")
		  }
	]
)


db.topics.insertMany(
    [
		{
			"_id": ObjectId("6148e63104e54108f71a48b3"),
			"name": "Intro to Programming",
			"description": "An overview of programming fundamentals",
			"instructor_id": ObjectId("6148de7204e54108f71a489c"),
			"taught_date": ISODate("2022-04-28T00:00:00Z")
		  },
		  {
			"_id": ObjectId("6148e66604e54108f71a48b4"),
			"name": "Data Structures and Algorithms",
			"description": "An exploration of common data structures and algorithms",
			"instructor_id": ObjectId("6148de9004e54108f71a489d"),
			"taught_date": ISODate("2022-06-13T00:00:00Z")
		  },
		  {
			"_id": ObjectId("6148e69504e54108f71a48b5"),
			"name": "Web Development",
			"description": "Building web applications with HTML, CSS, and JavaScript",
			"instructor_id": ObjectId("6148deaf04e54108f71a489e"),
			"taught_date": ISODate("2022-08-29T00:00:00Z")
		  },
		  {
			"_id": ObjectId("6148e6c504e54108f71a48b6"),
			"name": "Machine Learning",
			"description": "An introduction to machine learning techniques and applications",
			"instructor_id": ObjectId("6148decf04e54108f71a489f"),
			"taught_date": ISODate("2022-10-13T00:00:00Z")
		  }		  
	]
)


db.tasks.insertMany(
    [
		{
			"_id": ObjectId("6148e74304e54108f71a48b7"),
			"topic_id": ObjectId("6148e63104e54108f71a48b3"),
			"title": "Hello, World!",
			"description": "Write a program that prints the message 'Hello, World!' to the console",
			"difficulty": "Easy",
			"points": 10,
			"due_date": ISODate("2022-05-01T00:00:00Z")
		  },
		  {
			"_id": ObjectId("6148e76e04e54108f71a48b8"),
			"topic_id": ObjectId("6148e66604e54108f71a48b4"),
			"title": "Binary Search",
			"description": "Write a function that performs a binary search on a sorted array",
			"difficulty": "Medium",
			"points": 20,
			"due_date": ISODate("2022-06-15T00:00:00Z")
		  },
		  {
			"_id": ObjectId("6148e7a404e54108f71a48b9"),
			"topic_id": ObjectId("6148e69504e54108f71a48b5"),
			"title": "Build a Portfolio",
			"description": "Create a personal portfolio website showcasing your work and skills",
			"difficulty": "Hard",
			"points": 30,
			"due_date": ISODate("2022-08-31T00:00:00Z")
		  },
		  {
			"_id": ObjectId("6148e7d104e54108f71a48ba"),
			"topic_id": ObjectId("6148e6c504e54108f71a48b6"),
			"title": "Linear Regression",
			"description": "Implement linear regression in Python using the scikit-learn library",
			"difficulty": "Advanced",
			"points": 40,
			"due_date": ISODate("2022-10-15T00:00:00Z")
		  }  
	]
)



db.company_drives.insertMany(
    [
		{
			"_id": ObjectId("6148f23c04e54108f71a48bb"),
			"company_name": "Acme Inc.",
			"drive_date": ISODate("2022-01-15T00:00:00Z"),
			"job_title": "Software Engineer",
			"job_description": "We are seeking a highly skilled software engineer to join our team and help us build cutting-edge software products.",
			"eligibility_criteria": {
			  "min_cgpa": 8.0,
			  "max_backlogs": 1,
			  "required_skills": ["Java", "Python", "JavaScript"]
			},
			"job_location": "Bangalore",
			"contact_email": "recruiting@acme.com",
			"contact_phone": "+91-9876543210"
		  },
		  {
			"_id": ObjectId("6148f27604e54108f71a48bc"),
			"company_name": "XYZ Corp",
			"drive_date": ISODate("2022-03-05T00:00:00Z"),
			"job_title": "Data Analyst",
			"job_description": "We are looking for a data analyst with experience in data modeling, statistical analysis, and data visualization.",
			"eligibility_criteria": {
			  "min_cgpa": 7.0,
			  "max_backlogs": 2,
			  "required_skills": ["SQL", "R", "Tableau"]
			},
			"job_location": "Mumbai",
			"contact_email": "recruiting@xyzcorp.com",
			"contact_phone": "+91-9876543211"
		  },
		  {
			"_id": ObjectId("6148f2ac04e54108f71a48bd"),
			"company_name": "PQR Ltd.",
			"drive_date": ISODate("2022-06-20T00:00:00Z"),
			"job_title": "Full Stack Developer",
			"job_description": "We are seeking a talented full stack developer with experience in building web applications using modern frameworks and technologies.",
			"eligibility_criteria": {
			  "min_cgpa": 6.5,
			  "max_backlogs": 3,
			  "required_skills": ["Node.js", "React", "MongoDB"]
			},
			"job_location": "Pune",
			"contact_email": "recruiting@pqr.com",
			"contact_phone": "+91-9876543212"
		  },
		  {
			"_id": ObjectId("6148f2e004e54108f71a48be"),
			"company_name": "ABC Technologies",
			"drive_date": ISODate("2022-10-16T00:00:00Z"),
			"job_title": "Machine Learning Engineer",
			"job_description": "We are looking for a machine learning engineer to join our team and help us build intelligent systems using advanced machine learning techniques.",
			"eligibility_criteria": {
			  "min_cgpa": 8.5,
			  "max_backlogs": 0,
			  "required_skills": ["Python", "TensorFlow", "PyTorch"]
			},
			"job_location": "Hyderabad",
			"contact_email": "recruiting@abc.com",
			"contact_phone": "+91-9876543213"
		  }		   
	]
)



db.mentors.insertMany(
    [
		{
			"_id": "mentor-121",
			"name": "John Smith",
			"email": "john.smith@example.com",
			"mentees": ["Alice", "Bob", "Charlie", "David", "Eve"]
		  },
		  {
			"_id": "mentor-122",
			"name": "Jane Doe",
			"email": "jane.doe@example.com",
			"mentees": ["Frank", "Grace", "Henry", "Isabella", "Jack"]
		  },
		  {
			"_id": "mentor-123",
			"name": "Maggie Lee",
			"email": "maggie.lee@example.com",
			"mentees": ["Karen", "Liam", "Olivia", "Peter"],
			"expertise": ["Python", "Machine Learning"],
			"experience": "10+ years",
			"availability": true
		  },
		  {
			"_id": "mentor-124",
			"name": "Thomas Wang",
			"email": "thomas.wang@example.com",
			"mentees": ["Quinn", "Ryan", "Sophie", "Tom"],
			"expertise": {
			  "language": "Java",
			  "frameworks": ["Spring", "Hibernate"],
			  "database": "MongoDB"
			}
		  }				
	]
)