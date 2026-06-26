const empName = document.getElementById("name");
const email = document.getElementById("email");
const salary = document.getElementById("salary");
const role = document.getElementById("role");
const experience = document.getElementById("experience");
const submitBtn = document.getElementById("submit");
const empSection = document.getElementById("empSection");

function renderEmpList(emps) {
  emps?.map((emp) => {
    const empContainer = document.createElement("div");
    empContainer.classList = `p-2  w-full bg-${emp.id % 2 == 0 ? "green-100" : "blue-100"}`;
    const nameTag = document.createElement("h3");
    const no = document.createElement("div");
    no.classList =
      "w-10 h-10 rounded-full bg-red-100 text-black flex item-center justify-center pt-2 ";
    no.innerText = emp.id;

    const EmailTag = document.createElement("h3");
    const salaryTag = document.createElement("h3");
    const roleTag = document.createElement("h3");
    const experienceTag = document.createElement("h3");

    nameTag.innerText = "Name : " + emp.name;
    EmailTag.innerText = "Email : " + emp.email;
    salaryTag.innerText = "Salary : " + emp.salary;
    roleTag.innerText = "Role : " + emp.role;
    experienceTag.innerText = "Experience : " + emp.experience;

    empContainer.appendChild(no);
    empContainer.appendChild(nameTag);
    empContainer.appendChild(salaryTag);
    empContainer.appendChild(EmailTag);
    empContainer.appendChild(roleTag);
    empContainer.appendChild(experienceTag);

    empSection.appendChild(empContainer);
  });
}



// console.log(name);

// const error = "border-1 border-red-500 rounded outline-none";
// const normal = "outline-none border-2 border-green-400 rounded py-1 px-3";

// empName.addEventListener("input", (event) => {
//   const empNameValue = event.target.value;

//   if (empNameValue.length < 3||empNameValue.length>=20) {
//     empName.classList = error;
//   } else {
//     empName.classList = normal;
//   }
// });

const empList = [
  {
    id: 1,
    email: "kumararvind60700@gmail.com",
    experience: "fewrfwe",
    name: "class 1",
    role: "ye3ruerhfou",
    salary: "raj8764654",
  },
  {
    id: 2,
    email: "kumararvind60700@gmail.com",
    experience: "fewrfwe",
    name: "class 1",
    role: "ye3ruerhfou",
    salary: "raj8764654",
  },
   {
    id: 2,
    email: "kumararvind60700@gmail.com",
    experience: "fewrfwe",
    name: "class 1",
    role: "ye3ruerhfou",
    salary: "raj8764654",
  },
   {
    id: 2,
    email: "kumararvind60700@gmail.com",
    experience: "fewrfwe",
    name: "class 1",
    role: "ye3ruerhfou",
    salary: "raj8764654",
  },
   {
    id: 2,
    email: "kumararvind60700@gmail.com",
    experience: "fewrfwe",
    name: "class 1",
    role: "ye3ruerhfou",
    salary: "raj8764654",
  },
  
];
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  empList.push({
    name: empName.value,
    email: email.value,
    salary: salary.value,
    role: role.value,
    experience: experience.value,
  });
  console.log(empList);
  renderEmpList([
    {
      id: Math.ceil(Math.random() * 10 + 1),
      name: empName.value,
      email: email.value,
      salary: salary.value,
      role: role.value,
      experience: experience.value,
    },
  ]);
  empName.value = "";
  email.value = "";
  salary.value = "";
  role.value = "";
  experience.value = "";
});
// renderEmpList(empList);
