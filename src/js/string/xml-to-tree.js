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
const XmlElementType = {
    ELEMENT_UNKNOWN: 1,
    ELEMENT_OPENING_TAG: 2,
    ELEMENT_CLOSING_TAG: 3,
    ELEMENT_TEXT: 4
};

class XmlElement {
    constructor() {
        this.element_type = XmlElementType.ELEMENT_UNKNOWN;
        this.node_name = "";
    }
}

class XmlTokenizer {
    constructor(xml_str) {
        this.xml = xml_str;
        this.current_index = 0;
    }

    get_next_element(element) {
        let i = this.xml.substr(this.current_index).search('<');

        if (i === -1) {
            return false;
        }
        i += this.current_index;

        let temp = this.xml.substring(this.current_index, i);
        temp = temp.trim();

        if (temp.length != 0) {
            element.node_name = temp;
            element.element_type = XmlElementType.ELEMENT_TEXT;

            this.current_index = i;
            return true;
        }

        let j = this.xml.substr(i).search(">");
        j += i;
        if (this.xml[i + 1] === '/') {
            element.node_name = this.xml.substring(i + 2, j);
            element.element_type = XmlElementType.ELEMENT_CLOSING_TAG;
        } else {
            element.node_name = this.xml.substring(i + 1, j);
            element.element_type = XmlElementType.ELEMENT_OPENING_TAG;
        }
        this.current_index = j + 1;
        return true;
    }
}
class Node_xml {
    constructor(name) {
        this.node_name = name;
        this.children = [];
    }
}

let create_xml_tree = function(xml) {

    let tok = new XmlTokenizer(xml);
    let element = new XmlElement();

    if (!tok.get_next_element(element)) {
        return null;
    }

    //console.log(element.node_name);

    let st = [];
    let root = new Node_xml(element.node_name);
    st.push(root);

    while (tok.get_next_element(element)) {
        //console.log(element.node_name);
        let n = null;
        if (element.element_type === XmlElementType.ELEMENT_OPENING_TAG || element.element_type === XmlElementType.ELEMENT_TEXT) {
            n = new Node_xml(element.node_name);
            st[st.length - 1].children.push(n);
        }

        if (element.element_type === XmlElementType.ELEMENT_OPENING_TAG) {
            st.push(n);
        } else if (element.element_type === XmlElementType.ELEMENT_CLOSING_TAG) {
            st.pop();
        }
    }

    return root;
};

let xml = `
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
        </html>`;

let tree = create_xml_tree(xml);
console.log(tree.node_name);
console.log(Array.from(tree.children));


