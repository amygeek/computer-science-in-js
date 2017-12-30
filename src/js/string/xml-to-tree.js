/**
 * Given a valid XML document, read it in a tree structure.
     <html>
         <body>
             <div>
                 <h1>CodeRust</h1>
                 <a>http://coderust.com</a>
             </div>
             <div>
                <h2>Chapter 1</h2>
             </div>
             <div>
                 <h3>Chapter 2</h3>
                 <h4>Chapter 2.1</h4>
             </div>
         </body>
     </html>

 Runtime Complexity
 Linear, O(n)

 Memory Complexity
 Linear, O(n)
 */
const ElementType = {
    UNKNOWN: 1,
    OPENING_TAG: 2,
    CLOSING_TAG: 3,
    TEXT: 4
};

class XmlElement {
    constructor() {
        this.type = ElementType.UNKNOWN;
        this.name = "";
    }
}

class XmlTokenizer {
    
    constructor(xml) {
        this.xml = xml;
        this.current_index = 0;
    }

    getNextElement(element) {
        let i = this.xml.substr(this.current_index).search('<');

        if (i === -1) {
            return false;
        }
        i += this.current_index;

        let temp = this.xml.substring(this.current_index, i);
        temp = temp.trim();

        if (temp.length != 0) {
            element.name = temp;
            element.type = ElementType.TEXT;

            this.current_index = i;
            return true;
        }

        let j = this.xml.substr(i).search(">");
        j += i;
        if (this.xml[i + 1] === '/') {
            element.name = this.xml.substring(i + 2, j);
            element.type = ElementType.CLOSING_TAG;
        } else {
            element.name = this.xml.substring(i + 1, j);
            element.type = ElementType.OPENING_TAG;
        }
        this.current_index = j + 1;
        return true;
    }
}
class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }
}

let create_xml_tree = function(xml) {

    let tok = new XmlTokenizer(xml);
    let element = new XmlElement();

    if (!tok.getNextElement(element)) {
        return null;
    }

    //console.log(element.name);

    let st = [];
    let root = new Node(element.name);
    st.push(root);

    while (tok.getNextElement(element)) {
        //console.log(element.name);
        let n = null;
        if (element.type === ElementType.OPENING_TAG || element.type === ElementType.TEXT) {
            n = new Node(element.name);
            st[st.length - 1].children.push(n);
        }

        if (element.type === ElementType.OPENING_TAG) {
            st.push(n);
        } else if (element.type === ElementType.CLOSING_TAG) {
            st.pop();
        }
    }

    return root;
};

let print = (node) => {

    if ( !node ) {
        return;
    }
    let q = [];
    q.push(node);

    while (q.length > 0) {

        let n = q.shift();
        console.log(n.name);
        for(let i=0; i<n.children.length; i++) {

            q.push(n.children[i]);
        }
    }
}

let xml = `<html>
        <body>
        <div>
        <h1>CodeRust</h1>
        <a>http://coderust.com</a>
        </div>
        <div>
        <h2>Chapter 1</h2>
        </div>
        <div>
        <h3>Chapter 2</h3>
        <h4>Chapter 2.1</h4>
        </div>
        </body>
        </html>`;

let tree = create_xml_tree(xml);
print(tree);
//console.log(Array.from(tree.children));


