import React from "react";

function choice(items) {
  return items[Math.floor(Math.random() * items.length) + 1];
}

function remove(items, item) {
  return items.find(i => {
    if (i === item) {
      return i;
    }
  });
}

export { choice, remove };
