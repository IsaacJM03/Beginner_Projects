<?php 
include '../FileUploadingProject/fileupload/fileupload.php';
include '../FileUploadingProject/config.php';

use PHPUnit\Framework\TestCase;

class FileUploadTest extends TestCase
{
    private $db;

    public function setUp(): void
    {
        // Set up a database connection for testing
        $this->db = new mysqli('localhost', 'root', 'root', 'myfirst');
    }

    public function tearDown(): void
    {
        // Close the database connection after testing
        $this->db->close();
    }

    public function testUploadFile(): void
    {
        $fileUpload = new FileUpload($this->db);

        // Set up a test file
        $fileName = 'test_file.jpg';
        $fileType = 'jpg';
        $_FILES = [
            'file' => [
                'name' => $fileName,
                'type' => "text/{$fileType}",
                'tmp_name' => "/tmp/{$fileName}",
                'error' => 0,
                'size' => 100,
            ],
        ];

        // Call the uploadFile method and check the result
        $statusMsg = $fileUpload->uploadFile($_FILES['file']);
        $this->assertStringContainsString($fileName, $statusMsg);

        // Check that the file metadata was inserted into the database
        $result = $this->db->query("SELECT * FROM files WHERE file_name = '{$fileName}'");
        $this->assertTrue($result->num_rows == 1);

        // Clean up the test file and database
        unlink("/tmp/{$fileName}");
        $this->db->query("DELETE FROM files WHERE file_name = '{$fileName}'");
    }
}
