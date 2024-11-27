import { useState } from "react";

export function useModal() {
    const [modalShow, setModalShow] = useState(false);
    const [modalContent, setModalContent] = useState({
      title: "",
      description: "",
    });
    
    function handleModal(type) {
      if (type === "pages") {
        setModalContent({
          title: "Number of pages",
          description: "Add the number of pages ​​your project will have. The cost of each page is 30€.",
        });
      } else if (type === "languages") {
        setModalContent({
          title: "Number of languages",
          description: "Add the number of languages ​​your project will have. The cost of each language is 30€.",
        });
      }
      setModalShow(true);
    };

    const handleClose = () => {
        setModalShow(false);
        setModalContent({ title: "", description: "" });
      };

    return {
        modalShow,
        modalContent,
        handleModal,
        handleClose
    }
}


