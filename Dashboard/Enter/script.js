console.log("Serial Number:", serialNumber);
console.log("Guest Name:", guestName);
// Add more as needed
function generatePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Retrieve input values
    const serialNumber = document.getElementById("referenceNumber").value || 'N/A';
    const guestName = document.getElementById("guestName").value || 'N/A';
    const phoneNumber = document.getElementById("phoneNumber").value || 'N/A';
    const email = document.getElementById("email").value || 'N/A';
    const checkIn = document.getElementById("checkIn").value || 'N/A';
    const checkOut = document.getElementById("checkOut").value || 'N/A';
    const adults = document.getElementById("adults").value || '0';
    const children = document.getElementById("children").value || '0';
    const numberOfRooms = document.getElementById("numberOfRooms").value || '0';
    const perRoomRate = document.getElementById("perRoomRate").value || '0';
    const totalAmount = document.getElementById("totalAmount").value || '0';
    const advanceAmount = document.getElementById("advanceAmount").value || '0';
    const balanceAmount = document.getElementById("balanceAmount").value || '0';

    // Header
    doc.addImage('logo.png', 'PNG', 10, 10, 50, 20);
    doc.setFontSize(15);
    doc.setTextColor(16, 121, 149);
    doc.text('All India Tour Package Team', 10, 40, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text('Malappuram | Kozhikode | Thrissur | Mangalore', 10, 50, { align: 'center' });
    doc.text('70254 50050 | 7994 189 193 | 7559 894 744', 10, 55, { align: 'center' });
    doc.text('soofitravelogues@gmail.com', 10, 60, { align: 'center' });
    doc.text('@soofi_travelogues', 10, 65, { align: 'center' });
    doc.setDrawColor(16, 121, 149);
    doc.line(10, 70, 200, 70);
    doc.setFontSize(18);
    doc.text('Order Form', 10, 80, { align: 'center' });
    doc.setFontSize(12);

    // Booking Details
    const details = [
        `Serial Number: ${serialNumber}`,
        `Guest Name: ${guestName}`,
        `Phone Number: ${phoneNumber}`,
        `Email: ${email}`,
        `Check-in Date: ${checkIn}`,
        `Check-out Date: ${checkOut}`,
        `Adults: ${adults}`,
        `Children: ${children}`,
        `Number of Rooms: ${numberOfRooms}`,
        `Per Room Rate: ${perRoomRate}`,
        `Total Amount: ${totalAmount}`,
        `Advance Amount: ${advanceAmount}`,
        `Balance Amount: ${balanceAmount}`
    ];

    let yPosition = 100;
    details.forEach((line) => {
        doc.text(line, 20, yPosition);
        yPosition += 10; // Increase y position for each line
    });

    // Footer
    doc.setFontSize(10);
    doc.text('NB: Advance amount is non-refundable if the trip is canceled for any reason.', 20, yPosition + 10);

    // Save and print PDF
    doc.save(`${serialNumber}.pdf`);
    
    const pdfBlob = doc.output('blob');
    const pdfUrl = URL.createObjectURL(pdfBlob);
    const printWindow = window.open(pdfUrl);

    if (printWindow) {
        printWindow.onload = function() {
            printWindow.print();
            printWindow.onafterprint = function() {
                printWindow.close();
            };
        };
    } else {
        alert('Please allow pop-ups for this site to print the PDF.');
    }
}
