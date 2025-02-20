const Ads = require("../models/advertisement");
const { upload } = require("../utils/fileUpload");

exports.AdvertisementAdd = async(req,res) => {
    try{
        upload.single('adsImg')(req,res, async(err)=>{
            if(err)
                return res.status(400).json({ message: err.message });

            const { adsname,fdate,tdate,sTime,eTime,price,description } = req.body;
            if(!adsname)
                return res.status(400).json({message:"Advertisement Name is required"});

            const adsImg = req.file ? `/uploads/${req.file.filename}` : '';

            const adsData = new Ads({
                adsname,
                fdate,
                tdate,
                sTime,
                eTime,
                price,
                description,
                adsImg
            })
            await adsData.save();
            res.status(201).json({ message: 'Advertisement added successfully', data: adsData });
        })
        
    }catch(error){
        res.status(400).json({ message: 'Something Went Wrong', error });
    }
    
}

exports.Advertisement = async(req,res) => {
    const { id } = req.params;
    try{
        
        let adsData;
        if(id)
            adsData = await Ads.findOne({_id:id})
        else
            adsData = await Ads.find({})

        res.status(200).json({ message: adsData });
    }catch(error){
        res.status(400).json({ message: 'Something Went Wrong', error });
    }
}

exports.deleteAdvertisement = async (req, res) => {
    try {
        const { id } = req.params;

        // Find the Event by ID and delete it
        const deletedata = await Ads.findByIdAndDelete(id);

        if (!deletedata) {
            return res.status(404).json({ message: 'Advertisement not found' });
        }

        res.status(200).json({ message: 'Advertisement deleted successfully' });
    } catch (error) {
        console.error('Error deleting Advertisement:', error);
        res.status(500).json({ message: 'Error deleting Advertisement', error: error.message });
    }
};