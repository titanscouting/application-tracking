const config =  {
  "due": "September 14, 2021 @ 11:59 PM Central Time",
  "demographics": [
    {
      "id": "first-name",
      "name": "First Name",
      "type": "string",
      "required": true
    },
    {
      "id": "last-name",
      "name": "Last Name",
      "type": "string"
    },
    {
      "id": "id",
      "name": "Student ID",
      "type": "number",
      "props": {
        "min": "122000",
        "max": "124999"
      }
    },
    {
      "id": "hometown",
      "name": "Hometown",
      "type": "string"
    },
    {
      "id": "year",
      "name": "Year",
      "type": "radio",
      "options": [
        "Sophomore",
        "Junior",
        "Senior"
      ]
    },
    {
      "id": "family",
      "name": "Please indicate if you have any immediate family members who work for any of the team sponsors below.",
      "type": "checkbox",
      "options": [
        "Boeing",
        "Caterpillar",
        "TE Connectivity",
        "Vital Proteins",
        "Gus Berthold Electric",
        "Share Machine",
        "Fox Valley Sandblasting & Powder Coating",
        "Walmart",
        "Greenberg Traurig"
      ]
    }
  ],
  "wordlimit": 150,
  "questions": [
    {
      "question": "Why do you want to be on the team?",
      "subtitle": ""
    },
    {
      "question": "Do you have any other commitments during the year?",
      "subtitle": "Titan Robotics members are required to attend pre-season sessions, generally twice a week for two hours. Additionally, we require 50+ lab hours in order to attend competition with us, granted we get back to campus second semester. What are your other anticipated commitments?"
    },
    {
      "question": "Describe a project that you've designed, built, wired, or programmed.",
      "subtitle": "Talk about the design process you went through, whether you prototyped anything, and what you used to make it. If you don't have anything, talk about an idea that you would like to build or program and how you would build it."
    },
    {
      "question": "Teamwork is essential for FRC. Provide an example of you working well and collaborating with others to successfully complete a task.",
      "subtitle": "This could be a homework project, a specific team for some sort of assignment or competition, etc."
    },
    {
      "question": "Please describe your prior robotics experience.",
      "subtitle": "Having none is fine as well. If you do have experience, include number of years participated or N/A if none."
    },
    {
      "question": "How will you ensure that you stay active and connected with our team?",
      "subtitle": "Our main form of communication will be Discord, with information shared through a shared Google Drive and at meetings."
    },
    {
      "question": "Please describe any prior CAD experience you've had, including software used.",
      "subtitle": ""
    }
  ],
  "subteams": [
    "Business",
    "Electrical",
    "Mechanical",
    "Robot Programming",
    "Titan Software"
  ],
  "subteam-descriptions": {
    "Business": "The Business subteam works with corporate sponsors, manages team finances, posts on social media accounts, creates team merchandise and advertising, and organizes events and outreach opportunities.",
    "Electrical": "The Electrical subteam manages the electrical (sensors, motors, controllers, power distribution, etc.) and pneumatic (air tanks, air compressors, pistons, and solenoids) systems on the robot. You'll learn how to wire all of these components together to create a functioning robot.",
    "Mechanical": "The Mechanical subteam works to assemble efficient, competitive robots, being a vital intermediate step between a robot concept and a finalized robot. The mechanical subteam is responsible for the prototyping, manufacturing, and assembly of the team's robot.",
    "Robot Programming": "The Robot Programming subteam develops and implements software systems to enable robot actions. The team utilizes math, physics, and research to efficiently control and model a robot and its environment. *Robot Programming also has its own questions, which you will be prompted to answer if need be. **In addition, Robot Programming and Titan Software both require an additional programming test, sent separately, available separately and due the same day as this application.",
    "Titan Software": "Titan Software creates and deploys FRC scouting and data analysis tools that collect and analyze game data in order to provide insight into effective competition strategies. **Robot Programming and Titan Software both require an additional programming test in a separate form, available and due the same day as this application."
  },
  "extraQuestions": {
    "Programming": [],
    "Titan Software": []
  }
}

export default config; // don't remove this line