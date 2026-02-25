import contactModel from "../Model/contactModel";

export const createContact = async (req, res) => {
    try {
        const data = req.body;    
        const newContact = new contactModel(data);
        await newContact.save();
        res.status(201).json({ message: "Contact created successfully", contact: newContact });
    } catch (error) {
        res.status(500).json({ message: "Error creating contact", error: error.message });
    }
}

export const updateContactStatus = async (req, res) => {  
    try {
        const { _id } = req.params;  
        const data = req.body;        
        const updatedContact = await contactModel.findByIdAndUpdate(_id, data, { new: true });
        if (!updatedContact) {
            return res.status(404).json({ message: "Contact not found" });
        }   
        res.status(200).json({ message: "Contact status updated successfully", contact: updatedContact });
    } catch (error) {
        res.status(500).json({ message: "Error updating contact status", error: error.message });
    }
}
