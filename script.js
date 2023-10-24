const COLORS = {
    0: 'red-text-background',
    1: 'yellow-text-background',
    2: 'green-text-background',
    3: 'blue-text-background',
};

const createElement = (text_color_class) => {
    const child_container = document.createElement('section');

    const icon_element = document.createElement('i');
    const image_element = document.createElement('img');
    const category_element = document.createElement('p');
    const score_element = document.createElement('p');

    icon_element.appendChild(image_element);
    child_container.appendChild(icon_element);
    child_container.appendChild(category_element);
    child_container.appendChild(score_element);


    child_container.classList.add('field');
    child_container.classList.add(`${text_color_class}`);
    icon_element.classList.add('icon');
    category_element.classList.add('category');
    score_element.classList.add('score');

    return child_container;
}

const insertDataInElement = (category, imagePath, score, element) => {
    const iconElement = element.getElementsByTagName('img')[0];
    const categoryElement = element.getElementsByClassName('category')[0];

    const scoreElement = element.getElementsByClassName('score')[0];
    iconElement.src = imagePath;
    categoryElement.innerHTML = category;
    scoreElement.innerHTML = score + "&nbsp;" + "&nbsp;"

    const total_score_element = document.createElement('span')
    total_score_element.innerHTML = '/ 100';
    total_score_element.classList.add('total-score');
    scoreElement.appendChild(total_score_element)

    return element;

}

const parent_container = document.getElementById('summary');

if (parent_container) {
    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        data.map((data_row, index) => {
            const { category, score, icon } = data_row;
            
                const newElement = createElement(COLORS[index]);
                const elementWithData = insertDataInElement(category, icon, score, newElement)
                parent_container.appendChild(elementWithData)
            })
        }
    )
}
addElements()
