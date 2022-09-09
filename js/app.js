const projects = [
    {
      id: '1',
      title: 'high-back bench',
      category: 'social media',
      image:
        'https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg',
    },
    {
        id: '2',
        title: 'high-back bench',
        category: 'websites',
        image:
          'https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      },
      {
        id: '3',
        title: 'high-back bench',
        category: 'ui/ux',
        image:
          'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
      },
      {
        id: '4',
        title: 'high-back bench',
        category: 'market',
        image:
          'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        id: '2',
        title: 'high-back bench',
        category: 'websites',
        image:
          'https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg',
      },
      {
        id: '3',
        title: 'high-back bench',
        category: 'ui/ux',
        image:
          'https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg',
      },
      {
        id: '4',
        title: 'high-back bench',
        category: 'market',
        image:
          'https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
  ];


  let filteredProjects = [...projects];






const projectsContainer = document.querySelector('.projects-container')


displayProjects = ()=>{

projectsContainer.innerHTML = filteredProjects
.map((project)=>{
    const{id,title,category,image} = project;

    return `<article class="image-container project" data-id="${project.id}">
             <img
             src="${image}"
             class=""
             alt=""/>
             <footer class="project-tag">
                <h5 class="project-category">${category}</h5>
                <span class="project-title">${title}</span>
            </footer>
            </article>`
})
.join('');

}


displayProjects();


  
const categoryDOM = document.querySelector('.projects-filter');


const displayButtons =()=>{
    const buttons = [
        'all',
        ...new Set(projects.map((project)=>project.category)),
    ];

    categoryDOM.innerHTML= buttons
    .map((category)=>{
        return `<button class="cat-btn" data-id="${category}">${category}</button>`;
    }).join('');

}
displayButtons();


categoryDOM.addEventListener('click', (e)=>{

    console.log('hey')
    const el = e.target;
    if(el.classList.contains('cat-btn')){
        if(el.dataset.id === 'all'){
            filteredProjects = [...projects];
        }else{
            filteredProjects = projects.filter((project)=>{
                return project.category === el.dataset.id;
            });
        }
        displayProjects();
    }
})

