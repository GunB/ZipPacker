package e.utility;

import java.io.IOException;
import java.io.StringReader;
import java.util.ArrayList;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import org.w3c.dom.Node;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;

public class XMLTag {

    String strName;
    ArrayList<String> arrAttr;

    public XMLTag(String strName) {
        this.strName = strName;
    }

    public String getStrName() {
        return this.strName;
    }

    public void setStrName(String strName) {
        this.strName = strName;
    }

    public ArrayList<String> getArrAttr() {
        return this.arrAttr;
    }

    public void setArrAttr(ArrayList<String> arrAttr) {
        this.arrAttr = arrAttr;
    }

    public String returnFullTagData(String strData) {
        return "<" + this.strName + ">" + strData + "</" + this.strName + ">";
    }

    public Node returnFullNode(String strData) throws ParserConfigurationException, SAXException, IOException {
        return DocumentBuilderFactory.newInstance().newDocumentBuilder()
                .parse(new InputSource(new StringReader(returnFullTagData(strData))))
                .getDocumentElement();
    }
}
