// Declaration Block
const users = [
  {
    id: 1,
    customer: [
      {
        createRoom: [
          {
            no_of_seats_available: 10,
            amenities_in_room: "Ac, TV, Fridge, Gym, Pool",
            price_for_1_hour: 300,
          },
        ],
        roomBooking: [
          {
            customer_name: "A",
            room_name: "Z",
            Date: "01-01-2298",
            start_time: "06:00 AM",
            end_time: "06:00 PM",
            room_id: 1,
            booking_id: "107",
            booked_status: "Pending",
            booking_date: "01-12-2297",
          },
        ],
        // listAllRooms: [
        //   {
        //     room_name: "Z",
        //     booked_status: "Pending",
        //     customer_name: "A",
        //     Date: "01-01-2298",
        //     start_time: "06:00 AM",
        //     end_time: "06:00 PM",
        //   },
        // ],
        // listAllCustomers: [
        //   {
        //     room_name: "Z",
        //     customer_name: "A",
        //     Date: "01-01-2298",
        //     start_time: "06:00 AM",
        //     end_time: "06:00 PM",
        //   },
        // ],
        // count: [
        //   {
        //     customer_name: "A",
        //     room_name: "Z",
        //     Date: "01-01-2298",
        //     start_time: "06:00 AM",
        //     end_time: "06:00 PM",
        //     booking_id: "107",
        //     booking_date: "01-12-2297",
        //     booking_status: "Pending",
        //   },
        // ],
      },
    ],
  },
  {
    id: 2,
    customer: [
      {
        createRoom: [
          {
            no_of_seats_available: 20,
            amenities_in_room: "Ac, TV, WiFi, Pool",
            price_for_1_hour: 500,
          },
        ],
        roomBooking: [
          {
            customer_name: "B",
            room_name: "Y",
            Date: "01-01-2297",
            start_time: "06:00 AM",
            end_time: "06:00 PM",
            room_id: 2,
            booking_id: "109",
            booked_status: "Pending",
            booking_date: "01-12-2297",
          },
        ],
        // listAllRooms: [
        //   {
        //     room_name: "Y",
        //     booked_status: "Confirmed",
        //     customer_name: "B",
        //     Date: "02-02-2298",
        //     start_time: "08:00 AM",
        //     end_time: "04:00 PM",
        //   },
        // ],
        // listAllCustomers: [
        //   {
        //     room_name: "Y",
        //     customer_name: "B",
        //     Date: "02-02-2298",
        //     start_time: "08:00 AM",
        //     end_time: "04:00 PM",
        //   },
        // ],
        // count: [
        //   {
        //     customer_name: "B",
        //     room_name: "Y",
        //     Date: "02-02-2298",
        //     start_time: "08:00 AM",
        //     end_time: "04:00 PM",
        //     booking_id: "108",
        //     booking_date: "02-12-2297",
        //     booking_status: "Confirmed",
        //   },
        // ],
      },
    ],
  },
  {
    id: 3,
    customer: [
      {
        createRoom: [
          {
            no_of_seats_available: 15,
            amenities_in_room: "Ac, TV, Fridge, Gym",
            price_for_1_hour: 400,
          },
        ],
        roomBooking: [
          {
            customer_name: "C",
            room_name: "X",
            Date: "01-01-2298",
            start_time: "06:00 AM",
            end_time: "06:00 PM",
            room_id: 3,
            booking_id: "110",
            booked_status: "Paid",
            booking_date: "01-12-2296",
          },
        ],
        // listAllRooms: [
        //   {
        //     room_name: "X",
        //     booked_status: "Pending",
        //     customer_name: "C",
        //     Date: "03-03-2298",
        //     start_time: "10:00 AM",
        //     end_time: "02:00 PM",
        //   },
        // ],
        // listAllCustomers: [
        //   {
        //     room_name: "X",
        //     customer_name: "C",
        //     Date: "03-03-2298",
        //     start_time: "10:00 AM",
        //     end_time: "02:00 PM",
        //   },
        // ],
        // count: [
        //   {
        //     customer_name: "C",
        //     room_name: "X",
        //     Date: "03-03-2298",
        //     start_time: "10:00 AM",
        //     end_time: "02:00 PM",
        //     booking_id: "109",
        //     booking_date: "03-12-2297",
        //     booking_status: "Pending",
        //   },
        // ],
      },
    ],
  },
  {
    id: 4,
    customer: [
      {
        createRoom: [
          {
            no_of_seats_available: 25,
            amenities_in_room: "Ac, TV, Kitchen, Gym",
            price_for_1_hour: 600,
          },
        ],
        roomBooking: [
          {
            customer_name: "D",
            room_name: "W",
            Date: "01-01-2295",
            start_time: "06:00 AM",
            end_time: "06:00 PM",
            room_id: 4,
            booking_id: "111",
            booked_status: "Payment Pending",
            booking_date: "01-12-2295",
          },
        ],
        // listAllRooms: [
        //   {
        //     room_name: "W",
        //     booked_status: "Confirmed",
        //     customer_name: "D",
        //     Date: "04-04-2298",
        //     start_time: "01:00 PM",
        //     end_time: "05:00 PM",
        //   },
        // ],
        // listAllCustomers: [
        //   {
        //     room_name: "W",
        //     customer_name: "D",
        //     Date: "04-04-2298",
        //     start_time: "01:00 PM",
        //     end_time: "05:00 PM",
        //   },
        // ],
        // count: [
        //   {
        //     customer_name: "D",
        //     room_name: "W",
        //     Date: "04-04-2298",
        //     start_time: "01:00 PM",
        //     end_time: "05:00 PM",
        //     booking_id: "110",
        //     booking_date: "04-12-2297",
        //     booking_status: "Confirmed",
        //   },
        // ],
      },
    ],
  },
  {
    id: 5,
    customer: [
      {
        createRoom: [
          {
            no_of_seats_available: 30,
            amenities_in_room: "TV, Fridge, Gym, Pool",
            price_for_1_hour: 700,
          },
        ],
        roomBooking: [
          {
            customer_name: "E",
            room_name: "V",
            Date: "01-01-2294",
            start_time: "06:00 AM",
            end_time: "06:00 PM",
            room_id: 5,
            booking_id: "112",
            booked_status: "Booked",
            booking_date: "01-12-2294",
          },
        ],
        // listAllRooms: [
        //   {
        //     room_name: "V",
        //     booked_status: "Pending",
        //     customer_name: "E",
        //     Date: "05-05-2298",
        //     start_time: "09:00 AM",
        //     end_time: "12:00 PM",
        //   },
        // ],
        // listAllCustomers: [
        //   {
        //     room_name: "V",
        //     customer_name: "E",
        //     Date: "05-05-2298",
        //     start_time: "09:00 AM",
        //     end_time: "12:00 PM",
        //   },
        // ],
        // count: [
        //   {
        //     customer_name: "E",
        //     room_name: "V",
        //     Date: "05-05-2298",
        //     start_time: "09:00 AM",
        //     end_time: "12:00 PM",
        //     booking_id: "111",
        //     booking_date: "05-12-2297",
        //     booking_status: "Pending",
        //   },
        // ],
      },
    ],
  },
];

// Export Block
export default users;
