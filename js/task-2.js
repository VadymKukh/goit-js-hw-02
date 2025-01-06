`use strict`;

function formatMessage(message, maxLength) {
  const mess = message.slice(0, maxLength);

  if (mess === message) {
    return mess;
  } else {
    return mess + '...';
  }
}

formatMessage('Curabitur ligula sapien', 16);
console.log(formatMessage('Curabitur ligula sapien', 16));

formatMessage('Curabitur ligula sapien', 23);
console.log(formatMessage('Curabitur ligula sapien', 23));
