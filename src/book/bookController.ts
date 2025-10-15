import { Request, Response, NextFunction } from "express";
const createBook = (req: Request, res: Response, next: NextFunction) => {
    
    const files = req.files as {[fieldname:string]: Express.Multer.File[]};
    const coverImageMimeType = files.coverImage[0];
    const uploadResult = await cloudinary.uploader.upload(filePath,){
        filename_override:filename,
        folder:"book-covers",
        format:coverImageMimeType,
    }
    res.json({ message: "Book created" });
};
export default createBook;