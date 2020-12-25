export function buildFileSelector(isMultiple: boolean , cb :any){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    isMultiple && fileSelector.setAttribute('multiple', 'multiple');
    fileSelector.addEventListener("change", function fileDialogChanged (e: any){
        const fileList = e.path[0].files;

        if(fileList.length > 0){
            let pathFileListTemp: string[] = [];

            for (let index = 0; index < fileList.length; index++) {
                const pathFile = URL.createObjectURL(fileList[index]); 
                pathFileListTemp.push(pathFile);
            }

            cb(pathFileListTemp);
        }
    });
    return fileSelector;
}