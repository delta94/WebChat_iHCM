export interface IImageOverlay {
    close:any,
    miniImageList: IMiniImage[],
    mainMiniImage: IMiniImage
}

export interface IMiniImage{
    id:number,
    author: string,
    srcImage: string
}