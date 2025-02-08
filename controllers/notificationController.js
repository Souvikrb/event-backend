const Notification = require("../models/notification");
const { upload } = require("../utils/fileUpload");

exports.NotificationAdd = async(req,res) => {
    try{
            const { title,description,link } = req.body;
            if(!title)
                return res.status(400).json({message:"Notification title is required"});

            const dataSet = new Notification({
                title,
                description,
                link
            })
            await dataSet.save();
            res.status(201).json({ message: 'Notification added successfully', data: dataSet });
        
    }catch(error){
        res.status(400).json({ message: 'Something Went Wrong', error });
    }
    
}

exports.Notification = async(req,res) => {
    const { id } = req.params;
    try{
        
        let list;
        if(id)
            list = await Notification.findOne({_id:id})
        else
            list = await Notification.find({})

        res.status(200).json({ message: list });
    }catch(error){
        res.status(400).json({ message: 'Something Went Wrong', error });
    }
}

exports.deleteNotification = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the Event by ID and delete it
        const deletedata = await Notification.findByIdAndDelete(id);

        if (!deletedata) {
            return res.status(404).json({ message: 'Notification not found' });
        }

        res.status(200).json({ message: 'Notification deleted successfully' });
    } catch (error) {
        console.error('Error deleting Notification:', error);
        res.status(500).json({ message: 'Error deleting Notification', error: error.message });
    }
};

exports.updateNotification = async (req, res) => {
    try {
            const { id } = req.params;
            const { title,description,link } = req.body;
            if(!title)
                return res.status(400).json({message:"Notification title is required"});

            const dataset = {
                title,
                description,
                link
            }

            const updateDate = await Notification.findByIdAndUpdate(
                id,
                dataset,
                {new:true}
            );
            if (!updateDate) {
                return res.status(404).json({ message: "Notification not found" });
            }

            res.status(200).json({
                message: "Notification updated successfully",
                data: updateDate,
            });

    } catch (error) {
        return res.status(500).json({ message: "Something went wrong", error });
    }
}