// const container=React.createElement('div',{className:'divs',id:'div1'},[
//     React.createElement('section',{key:1,className:'sections',id:'section1'},[
//          React.createElement('h2',{key:1,className:'subheadings',id:'subheading1'},'Itview Solution'),
//          React.createElement('p',{key:2,className:'paragraphs',id:'para1'},'Welcome to ITview Solution, we provide the software solution to industry'),
//          React.createElement('img',{key:3,className:'images',id:'img1',style:{width:200,background:'red',borderColor:'red'},src:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s'})
//     ]),
//     React.createElement('section',{key:2,className:'sections',id:'section2'},[
//         React.createElement('h2',{key:1,className:'subheadings',id:'subheading2'},'Login Details'),
//         React.createElement('label',{key:2,className:'labels',id:'l1',htmlFor:'username'},'UserName'),
//         React.createElement('input',{key:3,className:'textfield',id:'textfield1'}),
//         React.createElement('label',{key:4,className:'labels',id:'l2',htmlFor:'password'},'PassWord'),
//         React.createElement('input',{key:5,className:'textfield',id:'textfield2',type:'password'}),
//         React.createElement('button',{key:6,className:'buttons',id:'b1',type:'submit'},'Submit')

//     ])
// ])

const contianer=<div class="divs" id="div1">
        <section class="sections" id="section1">
          <h2 class="subheadings" id="subheading1">Itview Solution</h2>
          <p class="paragraphs" id="para1">
            Welcome to ITview Solution, we provide the software solution to
            industry
          </p>
          <img
            class="images"
            id="img1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&amp;s"
            style="width: 200px; background: red; border-color: red"
          />
        </section>
        <section class="sections" id="section2">
          <h2 class="subheadings" id="subheading2">Login Details</h2>
          <label class="labels" id="l1" for="username">UserName</label
          ><input class="textfield" id="textfield1" /><label
            class="labels"
            id="l2"
            for="password"
            >PassWord</label
          ><input class="textfield" id="textfield2" type="password" /><button
            class="buttons"
            id="b1"
            type="submit"
          >
            Submit
          </button>
        </section>
      </div>

console.log(container)
const ROOT=ReactDOM.createRoot(document.querySelector('#root'))

ROOT.render(container)