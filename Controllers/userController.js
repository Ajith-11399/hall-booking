// Import Block
import users from "../Customers/users.js";

// Export Block
// Get All users
export const getUSers = (req, res) => {
  res.status(200).json({ date: users });
};

// Create a Room
export const createRoom = (req, res) => {
  const { no_of_seats_available, amenities_in_room, price_for_1_hour } =
    req.body.customer[0].createRoom[0];
  const newRoom = {
    id: users.length + 1,
    customer: [
      {
        createRoom: [
          {
            no_of_seats_available: no_of_seats_available,
            amenities_in_room: amenities_in_room,
            price_for_1_hour: price_for_1_hour,
          },
        ],
      },
    ],
  };
  users.push(newRoom);
  res.status(201).json({ message: "Room created successfully", data: newRoom });
};

// Book a Room
export const bookingRoom = (req, res) => {
  const {
    customer_name,
    room_name,
    Date,
    start_time,
    end_time,
    room_id,
    booking_id,
    booked_status,
    booking_date,
  } = req.body.customer[0].roomBooking[0];
  const bookRoom = {
    id: users.length + 1,
    customer: [
      {
        roomBooking: [
          {
            customer_name: customer_name,
            room_name: room_name,
            Date: Date,
            start_time: start_time,
            end_time: end_time,
            room_id: room_id,
            booking_id: booking_id,
            booked_status: booked_status,
            booking_date: booking_date,
          },
        ],
      },
    ],
  };
  users.push(bookRoom);
  res
    .status(200)
    .json({ message: "Room created successfully", data: bookRoom });
};

// List all rooms with booked data
export const allRoomsData = (req, res) => {
  const dataRooms = [];
  users.forEach((user) => {
    user.customer.forEach((customer) => {
      customer.roomBooking.forEach((room) => {
        const roomData = {
          room_name: room.room_name,
          customer_name: room.customer_name,
          Date: room.Date,
          start_time: room.start_time,
          end_time: room.end_time,
          booked_status: room.booked_status,
        };
        dataRooms.push(roomData);
      });
    });
  });
  res
    .status(200)
    .json({ message: "List of all rooms with booked data", data: dataRooms });
};

// List all customers with booked data
export const allUserData = (req, res) => {
    const dataUsers = [];
    users.forEach((user) => {
      user.customer.forEach((customer) => {
        customer.roomBooking.forEach((room) => {
          const userData = {
            room_name: room.room_name,
            customer_name: room.customer_name,
            Date: room.Date,
            start_time: room.start_time,
            end_time: room.end_time,
            booked_status: room.booked_status,
          };
          dataUsers.push(userData);
        });
      });
    });
    res.status(200).json({ message: "List of all rooms with booked data", data: dataUsers });
  };

  // List how many times a customer has booked the room with the above data
  export const countBookings = (req, res) => {
    const bookingCount = {};
    users.forEach((user) => {
      user.customer.forEach((customer) => {
        customer.roomBooking.forEach((booking) => {
          const { customer_name } = booking;
          if (bookingCount[customer_name]) {
            bookingCount[customer_name]++;
          } else {
            bookingCount[customer_name] = 1;
          }
        });
      });
    });
    res.status(200).json({ message: "Booking count for each customer", data: bookingCount });
  };