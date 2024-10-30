const EsiLeheSisuEl = document.getElementById('esilehe-sisu');
let todos = [];

function getPageContentHTML() {
    return `
    <div class="row">
        <div class="col-12 text-center">
            <h3 class="title-dark-blue">TO-DO</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <table class="table table-bordered table-striped">
                <thead class="custom-thead">
                    <tr>
                        <th>ID</th>
                        <th>Description</th>
                        <th>Priority</th>
                        <th>Is Done</th>
                    </tr>
                </thead>
                <tbody>
                    ${todos.map(todo => `
                        <tr>
                            <td>${todo.ID}</td>
                            <td>${todo.DESCRIPTION}</td>
                            <td>${todo.PRIORITY}</td>
                            <td>${todo.IS_DONE ? 'Yes' : 'No'}</td>
                        </tr>
                    `).join('')}
                </tbody>
            </table>
        </div>        
    </div>
    `;
}

function showPageContent() {
    EsiLeheSisuEl.innerHTML = getPageContentHTML();
}

async function fetchTasks() {
    let response = await fetch('/api/task');
    
    if (response.status === 200) {
        todos = await response.json();
        showPageContent();
    }
}

fetchTasks();