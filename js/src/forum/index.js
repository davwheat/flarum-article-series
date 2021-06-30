import registerModels from '../common/registerModels';
import addArticleList from './addArticleList';
import addArticleSeriesModal from './addArticleSeriesModal';

app.initializers.add('askvortsov/flarum-article-series', () => {
  registerModels();
  addArticleList();
  addArticleSeriesModal();
});
