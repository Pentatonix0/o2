import FavoriteList from "@/widgets/favorite-list/ui/FavoriteList";
import PageFrame from "@/shared/ui/page-frame/PageFrame";

function FavoritesPage() {
  return (
    <PageFrame
      eyebrow="Saved things"
      title="Избранное"
      subtitle="Товары, которые вы отметили сердцем. Этот список хранится в RTK и переживает обычные перезагрузки страницы."
    >
      <FavoriteList />
    </PageFrame>
  );
}

export default FavoritesPage;
