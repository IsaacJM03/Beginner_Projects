<?php
include '../config.php';
class FileUpload
{
    private $db;
    public function __construct($db){
        $this->db = $db;
    }
    public function uploadFile($file)
    {
        $statusMsg='';

        $targetDir = getcwd().DIRECTORY_SEPARATOR;
        $fileName = basename($_FILES['file']['name']);
        $targetPath=$targetDir.$fileName;
        $fileType = pathinfo($targetPath,PATHINFO_EXTENSION);

        if (!empty ($_FILES["file"]["name"])) {
            $allowTypes = array('jpg', 'png', 'gif', 'jpeg', 'pdf');
            if (in_array($fileType, $allowTypes)) {
                if (move_uploaded_file($_FILES["file"]["tmp_name"], $targetPath)) {
                    $statusMsg =$this->insertFileMetadata($fileName);
                } else {
                    $statusMsg = "Error uploading file";
                }
            } else {
                $statusMsg = "Sorry, only .jpg,.jpeg,.gif,.png and .pdf files allowed";
            }
        } else {
            $statusMsg = "Please select a file";
        };

        return $statusMsg;
    }

    private function insertFileMetadata($fileName):string
    {
        $insert = $this->db->prepare("INSERT INTO files (file_name,uploaded_on) VALUES (?,?)");
        $insert->bind_param("ss", $fileName, date('Y-m-d H:i:s'));
        if($insert->execute()){
            return "the file".$fileName."has been uploaded";
        }else{
            return "File wasn't uploaded";
        }
    }
}

$fileUpload=new FileUpload($db);
$statusMsg=$fileUpload->uploadFile($_FILES['file']);
echo $statusMsg;

