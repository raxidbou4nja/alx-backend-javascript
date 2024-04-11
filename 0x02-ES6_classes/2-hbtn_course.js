export default class HolbertonCourse {
  /**
   * @param {String} name - The name of the course.
   * @param {Number} length - The length of the course.
   * @param {Array} students - The students in the course.
   */
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  /**
   * Gets the name of this course.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the name of this course.
   */
  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  /**
   * @return {Number} The length of the course.
   */

  get length() {
    return this._length;
  }

  /**
   * @param {Number} length - The length of the course.
   */

  set length(length) {
    if (typeof length === 'number') {
      this._length = length;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  /**
   * @return {Array} The students in the course.
   */

  get students() {
    return this._students;
  }

  /**
   * @param {Array} students - The students in the course.
   */

  set students(students) {
    if (Array.isArray(students)) {
      this._students = students;
    } else {
      throw new TypeError('Students must be an array');
    }
  }
}
