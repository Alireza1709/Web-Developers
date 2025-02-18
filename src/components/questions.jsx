import React, { useState, useRef, useEffect } from 'react';

const Accordion = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const contentRefs = useRef([]); // ایجاد آرایه‌ای از رفرنس‌ها

    const handleOpenAccordion = (index) => {
        setOpenAccordion((prevIndex) => (prevIndex === index ? null : index));
    };

    // برای انجام ترنزیشن smooth، از useEffect استفاده می‌کنیم
    useEffect(() => {
        contentRefs.current.forEach((content, index) => {
            if (content) {
                if (openAccordion === index) {
                    // آکاردئون باز می‌شود
                    content.style.maxHeight = `${content.scrollHeight}px`;
                } else {
                    // آکاردئون بسته می‌شود
                    content.style.maxHeight = '0px';
                }
            }
        });
    }, [openAccordion]);

    return (
        <div className="py-4 pb-5" style={{ backgroundColor: "rgb(243, 243 , 243)" }}>
            <section className="container">
                <h2 className="text-center display-5 mt-5">Frequently asked question</h2>
                <span className="text-center text-muted lead">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, impedit modi? Corrupti rerum accusantium, odio repellendus quaerat, consectetur laudantium eum dolorum voluptatum impedit architecto obcaecati recusandae nobis repellat inventore sapiente.
                </span>
            </section>
            <div className="accordion mt-5" id="accordionPanelsStayOpenExample">
                {['What is your job?', 'What is your mission?', 'Why should I trust you?', 'How can I contact you?'].map((question, index) => (
                    <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                            <button onClick={() => handleOpenAccordion(index)} className="accordion-button" type="button">
                                #{index + 1} {question}
                            </button>
                        </h2>
                        <div
                            ref={(el) => contentRefs.current[index] = el} // ارجاع به هر آکاردئون جداگانه
                            className={`accordion-collapse collapse ${openAccordion === index ? 'show' : ''}`}
                            style={{
                                maxHeight: '0px', // شروع با max-height صفر
                                overflow: 'hidden',
                                transition: 'max-height 0.3s ease-in-out', // ترنزیشن برای max-height
                            }}
                        >
                            <div className="accordion-body">
                                <strong>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, dolores!{index + 1}</strong>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores at beatae distinctio ducimus reprehenderit illum iure aliquid eum culpa non aspernatur, vero facere. Porro, rerum expedita. Voluptas quisquam enim commodi.
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum assumenda deleniti enim in quae! Deserunt est modi tenetur iusto? Modi ratione eveniet tempore pariatur ipsam dicta odio saepe ducimus sunt.
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, sunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni molestias iusto ratione officia ipsam dicta ipsum mollitia, accusantium reiciendis perferendis dolores suscipit ex et neque numquam nam sapiente. Voluptates, quas!
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accordion;
