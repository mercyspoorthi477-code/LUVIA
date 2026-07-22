const User = require("../models/User");
const Period = require("../models/Period");

const getDashboard = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId).select("-password");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const latestPeriod = await Period.findOne({ user: userId }).sort({
      startDate: -1,
    });

    let prediction = null;

    if (latestPeriod) {
      const cycle = user.cycleLength || 28;

      const nextPeriod = new Date(latestPeriod.startDate);
      nextPeriod.setDate(nextPeriod.getDate() + cycle);

      const ovulation = new Date(nextPeriod);
      ovulation.setDate(ovulation.getDate() - 14);

      const fertileStart = new Date(ovulation);
      fertileStart.setDate(fertileStart.getDate() - 5);

      const fertileEnd = new Date(ovulation);
      fertileEnd.setDate(fertileEnd.getDate() + 1);

      prediction = {
        nextPeriod,
        ovulation,
        fertileWindow: {
          start: fertileStart,
          end: fertileEnd,
        },
      };
    }

    const notifications = [
      "🌙 Track your health daily.",
      "💧 Drink enough water.",
      "🍎 Eat iron-rich foods.",
      "😴 Get enough sleep.",
    ];

    const hospitals = [
      {
        name: "Apollo Hospital",
        consultationFee: "₹600",
      },
      {
        name: "Aster Hospital",
        consultationFee: "₹500",
      },
      {
        name: "Rainbow Hospital",
        consultationFee: "₹700",
      },
    ];

    const padReviews = [
      {
        name: "Whisper Ultra",
        rating: 4.8,
        price: "₹399",
        link: "https://www.amazon.in",
      },
      {
        name: "Stayfree XL",
        rating: 4.6,
        price: "₹299",
        link: "https://www.flipkart.com",
      },
      {
        name: "Sofy AntiBacteria",
        rating: 4.7,
        price: "₹350",
        link: "https://www.amazon.in",
      },
    ];

    const diet = [
      "Spinach",
      "Banana",
      "Dark Chocolate",
      "Eggs",
      "Nuts",
      "Dates",
      "Orange Juice",
    ];

    const facts = [
      "The average menstrual cycle is 28 days.",
      "Hydration helps reduce cramps.",
      "Iron-rich foods help recover blood loss.",
      "Exercise can reduce period pain.",
    ];

    res.json({
      user,
      latestPeriod,
      prediction,
      notifications,
      hospitals,
      padReviews,
      diet,
      facts,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getDashboard,
};