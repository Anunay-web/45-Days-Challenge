const details = [
      { skill: "CSS", level: "Advanced" },
      { skill: "Javascript", level: "Intermediate" },
      { skill: "React", level: "Intermediate" }
    ];

    let list = document.querySelector("#list");

    list.innerHTML = details.map(item => `
      <div class="flex items-center justify-between w-full rounded-xl h-16 p-4 shadow bg-yellow-50">
        <h4 class="text-xl font-semibold text-pink-400">${item.skill}</h4>
        <h4 class="text-xl font-semibold text-pink-400">${item.level}</h4>
      </div>
    `).join("");