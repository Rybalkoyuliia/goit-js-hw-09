const delayForm = document.querySelector('[name="delay"]');
const stepForm = document.querySelector('[name="step"]');
const amountForm = document.querySelector('[name="amount"]');
const btn = document.querySelector('button');

function activePromise(e) {
  e.preventDefault();
  let valueDelay = Number(delayForm.value);
  let valueStep = Number(stepForm.value);
  let valueAmount = Number(amountForm.value);
  for (let i = 1; i <= valueAmount; i += 1) {
    createPromise(i, valueDelay + valueStep * i)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

btn.addEventListener('click', activePromise);
