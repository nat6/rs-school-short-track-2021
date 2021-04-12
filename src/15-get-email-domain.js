/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const domainExp = /@[A-Za-z\d-]+\.[A-Za-z]+$/g;
  const result = email.match(domainExp).join('').split('');
  result.splice(0, 1);
  return result.join('');
}

module.exports = getEmailDomain;
