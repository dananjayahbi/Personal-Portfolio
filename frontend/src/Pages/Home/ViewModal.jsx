import React from "react";
import { Modal, Button, Image } from "antd";

const ViewModal = ({ visible, onCancel, item }) => {
return (
    <Modal
        title={<h1 style={{ fontSize: "24px" }}>{item.topic}</h1>}
        visible={visible}
        width={1000}
        onCancel={onCancel}
        footer={[
            <Button key="back" onClick={onCancel}>
                Close
            </Button>,
        ]}
    >
        <p style={{marginTop: "20px", fontSize:"16px", marginBottom: "20px"}}>{item.description}</p>
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {item.galaryArray?.map((image, index) => (
                <div style={{marginBottom: "30px"}}>
                <Image key={index} src={image} alt="" width="50rem" />
                </div>
            ))}
        </div>
    </Modal>
);
};

export default ViewModal;
