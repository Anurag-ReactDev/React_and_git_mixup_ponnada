When building react apps, as your number of components increase, it makes the overall file's size
big. Even after a bundler minimises the files it is still significantly bigger.
So, to solve this we can go with code chunking/lazy loading/dynamic loading etc
Basically the idea is to serve the component(a js file) only when needed ie when clicked or requested by client
the minified main js file formed by bundler doesn't contain the lazy loaded file, but the file is served only
when asked for.

To use lazy loading we need {lazy} function from 'react'

const component = lazy(()=> import(path_of_the_component_that_needs_to_be_lazy_loaded))

There's a catch here, try this ie try lazy loading and see for yourself that it won't work

It didn't work eh?
Because react was looking for the component already and since it did not find it it throws an error
Now to make it work, import {suspense} from react
Wrap that component in it
give fallback ie till the component loads give it something to show


//Tailwind
->Press ctrl+space for suggestions

//higher order functions
These functions take component as an input and return a component again, basically modifies a component
Here, we used higher order function to put promoted label to Cards component
it takes input Cards component then returns another component which is basically a
functional component, and then that functional component returns jsx code, so thats how 
a higher order function is written.

Then we head out to the body component which is actually responsible for feeding data to
Cards component
here we import the higher order function and since we dont export it by default
we import it as a function and not directly as a component
so we make it a component by 'const CardsPromoted = CardswithPromotedLabel(Cards)'

and then we use a ternary opeartor (condition?true:false) and render higher order fucntion or the normal component based on business logic

then, 



