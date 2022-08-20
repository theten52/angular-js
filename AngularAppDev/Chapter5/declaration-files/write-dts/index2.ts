import { Moon, Sun, universe } from './universe'; // 导入universe.d.ts

let moon = new Moon(); // 通过类Moon构造月亮对象
moon.revolve(); // 调用类Moon的方法revolve()

let sun = new Sun(); // 通过构造函数Sun构造太阳对象
sun.shine(); // 调用接口Sun的shine()方法

universe.moon.revolve(); // 调用宇宙对象的moon属性的revolve()方法
universe.sun.shine(); // 调用宇宙对象的sun属性的revolve()方法