export function List() {
    const fruits = [
        { id: 1, name: "apple", calories: 105 },
        { id: 2, name: "orange", calories: 65 },
        { id: 3, name: "banana", calories: 29 },
        { id: 4, name: "pineapple", calories: 48 }
    ];

   // fruits.sort((a,b)=>b.name.localeCompare(a.name));
  // fruits.sort((a,b)=>a.calories-b.calories);

    const listItems = fruits.map(fruit => <li key={fruit.id}>
        {fruit.name}:&nbsp;
        <b>{fruit.calories}</b></li>);

    return (<ol>{listItems}</ol>);
}