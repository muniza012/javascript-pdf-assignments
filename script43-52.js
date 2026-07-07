///////////////// chap 43-48

///ques # 1

document.getElementById('link').addEventListener('click', clickHandler)

function clickHandler() {
  alert('button was clicked')
}

///ques # 2
const images = document.querySelectorAll("img");

images.forEach((img) => {
  img.addEventListener("click", imgHandler);
});

function imgHandler() {
  alert("Thank you for purchasing a phone from us");
}

///// ques # 3

// async function fetchData() {
//   const res = await fetch("https://dummyjson.com/users");
//   const data = await res.json();

//   const students = data.users.slice(0, 5);

//   renderTable(students);
// }

// function renderTable(students) {
//   const tableBody = document.getElementById("tableBody");

//   students.forEach(student => {
//     const row = document.createElement("tr");

//     row.innerHTML = `
//       <td>${student.id}</td>
//       <td>${student.firstName}</td>
//       <td>${student.email}</td>
//       <td>
//         <button class="delete-btn">Delete</button>
//       </td>
//     `;

//     const deleteBtn = row.querySelector(".delete-btn");

//     deleteBtn.addEventListener("click", () => {
//       row.remove();
//     });

//     tableBody.appendChild(row);
//   });
// }

// fetchData();

/////ques 4

document.getElementById('change-img').addEventListener('mouseover', (e) => {
 e.target.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6gCuKhSZ6aUPDAdAKucbUj0mxICtzP6eu7GIHcGDLgApECTxMvf3u-eg&s=10'
 
})
document.getElementById('change-img').addEventListener('mouseout', (e) => {
 e.target.src="https://media.istockphoto.com/id/2196545732/photo/cosmos-blooming-in-a-park.jpg?s=612x612&w=0&k=20&c=f4j4ARFK17AWviTM0ubzdQdO3EsYwD1IqZ0mt-cy_rw="
 
})

//////// ques 5
let counter=0;
let display = document.querySelector('.display')
display.innerHTML=counter
document.querySelector('.btn-1').addEventListener('click', () => {
  counter++
display.innerHTML=counter
})

document.querySelector('.btn-2').addEventListener('click', () => {
  counter--
display.innerHTML=counter

})


///////////////////////chap 49-52

//// ques 1
// document.getElementById('form').addEventListener('submit',submitHandler)
// function submitHandler(e) {
//   e.preventDefault()
//   const name=document.getElementById('name').value
//   const fname=document.getElementById('f-name').value
//   const dob=document.getElementById('dob').value
//   const about = document.getElementById('about').value
//   const output = document.getElementById("output");
//   output.innerHTML = `
//   <h3>User Information</h3>
//   <p>Name: ${name}</p>
//   <p>Father Name: ${fname}</p>
//   <p>DOB: ${dob}</p>
//   <p>About: ${about}</p>
// `;
//    document.getElementById("form").style.display = "none";
// }


//////// ques 2

// const container = document.querySelector('.read')
// const p = document.createElement('p')
// p.innerHTML = 'qwertyuio qwer qwe <button id="btn-more" style="border:none">Read more......</button>';

// p.classList.add('para');
// container.appendChild(p)
// const btn = document.getElementById('btn-more');
// document.getElementById('btn-more').addEventListener('click', paraHandler)
// function paraHandler(params) {
//   btn.remove();
//   p.innerHTML += 'qwert qwertyu qwertyuiop asdf ghj kl zxcvvbbnmujuj'
   
// }
// container.appendChild(p)


////////ques 3

const studentForm = document.getElementById("studentForm");
const tableBody = document.getElementById("tableBody");

const editForm = document.getElementById("editForm");
const studentTable = document.getElementById("studentTable");
let currentRow = null;

// ADD STUDENT
studentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const fname = document.getElementById("f-name").value;
  const dob = document.getElementById("dob").value;
  const about = document.getElementById("about").value;

  const row = document.createElement("tr");

  row.innerHTML = `
    <td>${name}</td>
    <td>${fname}</td>
    <td>${dob}</td>
    <td>${about}</td>
    <td><button class="edit-btn">Edit</button></td>
    <td><button class="delete-btn">Delete</button></td>
  `;

  //////////////delete
  row.querySelector(".delete-btn").addEventListener("click", () => {
    row.remove();
  });

  //////////edit
  row.querySelector(".edit-btn").addEventListener("click", () => {
    currentRow = row;

    document.getElementById("edit-name").value =
      row.cells[0].textContent;

    document.getElementById("edit-fname").value =
      row.cells[1].textContent;

    document.getElementById("edit-dob").value =
      row.cells[2].textContent;

    document.getElementById("edit-about").value =
      row.cells[3].textContent;

    editForm.style.display = "block";
  });

  tableBody.appendChild(row);
studentTable.style.display = "table";
  studentForm.reset();
});

//////////////////////////update std
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  currentRow.cells[0].textContent =
    document.getElementById("edit-name").value;

  currentRow.cells[1].textContent =
    document.getElementById("edit-fname").value;

  currentRow.cells[2].textContent =
    document.getElementById("edit-dob").value;

  currentRow.cells[3].textContent =
    document.getElementById("edit-about").value;

  editForm.style.display = "none";
});