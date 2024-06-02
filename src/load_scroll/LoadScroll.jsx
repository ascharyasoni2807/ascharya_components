import React, { useState, useEffect, useCallback } from "react";

const LoadOnScroll = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Dummy fetchMoreItems function to simulate an API call
  const fetchMoreItems = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const newItems = Array.from(
          { length: 10 },
          (_, i) => `Item ${items.length + i + 1}`
        );
        resolve(newItems);
      }, 1000);
    });
  };

  const loadItems = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);

    const newItems = await fetchMoreItems();
    if (items.length > 20) {
      setHasMore(false);
    } else {
      setItems((prevItems) => [...prevItems, ...newItems]);
    }

    setLoading(false);
  }, [loading, hasMore, items.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 100
      ) {
        loadItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadItems]);

  useEffect(() => {
    loadItems(); // Load initial items
  }, []);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {loading && <p>Loading...</p>}
      {!hasMore && <p>No more items to load</p>}
    </div>
  );
};

export default LoadOnScroll;
