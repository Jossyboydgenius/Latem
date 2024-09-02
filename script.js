// script.js

// Example order data array
const orders = [
  {
    table: 'Table 1',
    items: [
      'Green Salad (2)',
    ],
    waitTime: '2m 30s',
    seats: 2,
    orderCount: 5,
    completedItems: 3,
    rating: 'Good',
    orderId: 1090,
    notes: 'No Green'
  },
  {
    table: 'Table 2',
    items: [
      'Veil BBQ (2)',
    ],
    waitTime: '2m 45s',
    seats: 3,
    orderCount: 6,
    completedItems: 4,
    rating: 'Excellent',
    orderId: 1091,
    notes: 'Extra Sauce'
  },
  {
    table: 'Table 3',
    items: [
      'Green Salad (2)',
    ],
    waitTime: '2m 30s',
    seats: 2,
    orderCount: 5,
    completedItems: 3,
    rating: 'Good',
    orderId: 1090,
    notes: 'No Green'
  },
 
  {
    table: 'Table 3',
    items: [
      'Veil BBQ (2)',
    ],
    waitTime: '21m 30s',
    seats: 2,
    orderCount: 5,
    completedItems: 3,
    rating: 'Good',
    orderId: 1090,
    notes: 'No Green'
  },
 
  // Add more orders as needed
];


// Function to render a single order group
function renderOrderGroup(order) {
  return `
    <div class="group-7">
      <div class="overlap-9">
        <div class="ellipse-9"></div>
        <div class="rectangle-2"></div>
        <div class="text-wrapper-25">${order.table}</div>
        <div class="text-wrapper-26">Item</div>
        <div class="items-container">
          ${order.items.map(item => `
            <div class="text-wrapper-27">
              <input type="checkbox" class="rectangle-3" onchange="handleCheckboxChange(this)" />
              ${item}
            </div>
          `).join('')}
        </div>
        <div class="text-wrapper-28">${order.waitTime}</div>
        <div class="text-wrapper-29">-</div>
        <div class="text-wrapper-30">-</div>
        <div class="text-wrapper-31">${order.waitTime}</div>
        <div class="text-wrapper-32">12:20</div>
        <div class="text-wrapper-33">1:30</div>
        <div class="text-wrapper-34">${order.notes}</div>
        <div class="text-wrapper-40">Total Wait Time:</div>
        <div class="text-wrapper-41">Seats:</div>
        <div class="text-wrapper-42">Order Count:</div>
        <div class="text-wrapper-43">Completed Items:</div>
        <div class="text-wrapper-44">Rating:</div>
        <div class="text-wrapper-45">Order ID:</div>
        <div class="text-wrapper-46">${order.waitTime}</div>
        <div class="text-wrapper-47">${order.seats}</div>
        <div class="text-wrapper-48">${order.orderCount}</div>
        <div class="text-wrapper-49">${order.completedItems}</div>
        <div class="text-wrapper-50">${order.rating}</div>
        <div class="text-wrapper-51">${order.orderId}</div>
        <div class="text-wrapper-55">Note</div>
        <div class="text-wrapper-53">T.E</div>
        <img class="line-15" src="https://c.animaapp.com/dTPxXaJm/img/line-36-1.svg" alt="Line 15" />
        <img class="line-16" src="https://c.animaapp.com/dTPxXaJm/img/line-37-1.svg" alt="Line 16" />
        <img class="line-17" src="https://c.animaapp.com/dTPxXaJm/img/line-40-1.svg" alt="Line 17" />
        <img class="line-18" src="https://c.animaapp.com/dTPxXaJm/img/line-95-1.svg" alt="Line 18" />
        <img class="line-19" src="https://c.animaapp.com/dTPxXaJm/img/line-96-1.svg" alt="Line 19" />
        <img class="line-20" src="https://c.animaapp.com/dTPxXaJm/img/line-96-1.svg" alt="Line 20" />
        <img class="line-21" src="https://c.animaapp.com/dTPxXaJm/img/line-42-1.svg" alt="Line 21" />
        <img class="line-22" src="https://c.animaapp.com/dTPxXaJm/img/line-44-1.svg" alt="Line 22" />
        <img class="line-23" src="https://c.animaapp.com/dTPxXaJm/img/line-44-1.svg" alt="Line 23" />
        <img class="line-24" src="https://c.animaapp.com/dTPxXaJm/img/line-44-1.svg" alt="Line 24" />
        <img class="line-25" src="https://c.animaapp.com/dTPxXaJm/img/line-44-1.svg" alt="Line 25" />
        <img class="line-26" src="https://c.animaapp.com/dTPxXaJm/img/line-47-1.svg" alt="Line 26" />
        <img class="line-27" src="https://c.animaapp.com/dTPxXaJm/img/line-97-1.svg" alt="Line 27" />
        <div class="checked-items"></div>
      </div>
    </div>
  `;
}

// Function to handle checkbox change
function handleCheckboxChange(checkbox) {
  const itemDiv = checkbox.parentElement;
  const checkedItemsContainer = itemDiv.closest('.group-7').querySelector('.checked-items');

  if (checkbox.checked) {
    itemDiv.classList.add('checked');
    checkedItemsContainer.appendChild(itemDiv);
  } else {
    itemDiv.classList.remove('checked');
    const itemsContainer = itemDiv.closest('.group-7').querySelector('.items-container');
    itemsContainer.appendChild(itemDiv);
  }
}

// Render all order groups
function renderOrderGroups(orders) {
  const container = document.getElementById('order-groups-container');
  container.innerHTML = orders.map(renderOrderGroup).join('');
}

// Initialize and render orders
renderOrderGroups(orders);
