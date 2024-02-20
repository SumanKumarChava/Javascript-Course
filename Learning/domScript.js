function print(str){
    console.log(str);
}

// Some DOM properties

print(window);

print(window.document);

print(document.body);

print(document.body.innerHTML);

print("------------------");

print(document.links[0]);

//document.body.innerHTML = '<h2>Hello World</h2>';

document.write('Welcome Suman');

// const main = document.getElementById('main');
// print(main.innerHTML);
// main.innerHTML = '<h1>Hello From Main</h1>';

print(document.querySelector('#main h1'));
print(document.querySelector('#main a'));



// Document element properties examples
print(document.all);
print(document.all[5]);
print(document.all.length);
print(document.documentElement);
print(document.head);
print(document.body);